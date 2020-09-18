<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="15" :rules="nameRules" label="Nome" required></v-text-field>

      <v-text-field
        v-model="lastName"
        :counter="15"
        :rules="lastNameRules"
        label="Sobrenome"
        required
      ></v-text-field>

      <v-text-field v-model="document" :counter="11" :rules="documentRules" label="CPF" required></v-text-field>

      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

      <v-select
        v-model="sex"
        :items="items"
        :rules="[(sex) => !!sex || 'Todos os campos são obrigatórios']"
        label="Sexo"
        required
      ></v-select>

      <v-btn :disabled="!valid" color="error" class="mr-4">Criar</v-btn>

      <v-btn to="/" color="secundary" @click="resetValidation">Cancelar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    lastName: "",
    document: "",
    email: "",
    sex: null,
    nameRules: [
      (name) =>
        (name && name.length <= 15) ||
        "Invalido! O nome deve conter somente 15 caracteres",
      (name) => !!name || "Nome é obrigatório",
    ],
    lastNameRules: [
      (lastName) =>
        (lastName && lastName.length <= 15) ||
        "Invalido! O nome deve conter somente 15 caracteres",
      (lastName) => !!lastName || "Sobrenome é obrigatório",
    ],
    documentRules: [
      (cpf) =>
        (cpf && cpf.length <= 11) || "CPF inexistente, verificar documento.",
      (cpf) => !!cpf || "CPF é obrigatório",
    ],
    emailRules: [
      (email) => !!email || "E-mail é obrigatório",
      (email) => /.+@.+\..+/.test(email) || "E-mail invalido!",
    ],
    items: ["Masculino", "Feminino"],
  }),

  methods: {
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    checkFields(field) {
      alert(`${field} é um campo Obrigatório`);
    },
    cleanField() {
      this.$refs.form.reset();
    },
  },
};
</script>
