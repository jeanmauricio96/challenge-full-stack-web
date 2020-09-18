const express = require('express');
const cors = require('cors');
const mysql = require('../mysql').pool;

const router = express.Router();
router.use(cors());

const students = [];

// eslint-disable-next-line consistent-return
function fieldContents(request, response, next) {
  const { nome, sobrenome, email, cpf, sexo } = request.body;

  if (!nome || !sobrenome || !email || !cpf || !sexo) {
    return response
      .status(400)
      .json({ error: `Filling in all fields is mandatory!` });
  }

  next();
}

// eslint-disable-next-line consistent-return
function validateStudentId(request, response, next) {
  const { id } = request.params;

  if (!id) {
    return response
      .status(400)
      .json({ error: `Param sent is not a valid UUID` });
  }

  next();
}

router.get('/', (request, response) => {
  const { nome } = request.query;

  const results = nome
    ? students.filter((student) => student.nome.includes(nome))
    : students;

  return response.status(200).json(results);
});

router.post('/register', fieldContents, (request, response) => {
  mysql.getConnection((error, conn) => {
    conn.then(
      'INSERT INTO students (nome, sobrenome, email, cpf, sexo) VALUES (?,?,?,?,?)',
      [
        request.body.nome,
        request.body.sobrenome,
        request.body.email,
        request.body.cpf,
        request.body.sexo,
      ],
      // eslint-disable-next-line no-shadow
      (error, results) => {
        conn.release();
        if (error) {
          return results.status(500).send({
            error,
            response: null,
          });
        }
        return response.status(201).send({
          mensagem: 'Aluno cadastrado!',
          id_students: results.insertId,
        });
      }
    );
  });
});

router.put('/students/:id', validateStudentId, (request, response) => {
  const { id } = request.params;
  const { nome, sobrenome, email, cpf, sexo } = request.body;

  const studentIndex = students.findIndex((student) => student.id === id);

  if (studentIndex < 0) {
    return response.status(400).json({ error: 'Student not found.' });
  }

  const student = {
    id,
    nome,
    sobrenome,
    email,
    cpf,
    sexo,
  };

  students[studentIndex] = student;

  return response.status(200).json(student);
});

router.delete('/students/:id', validateStudentId, (request, response) => {
  const { id } = request.params;

  const studentIndex = students.findIndex((student) => student.id === id);

  if (studentIndex < 0) {
    return response.status(400).json({ error: 'Student not found.' });
  }

  students.splice(studentIndex, 1);

  return response.status(204).send();
});

module.exports = router;
