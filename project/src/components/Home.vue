<template>
  <v-data-table :headers="headers" :items="studens" class="mt-7 mr-7 ml-7 elevation-1">
    <template v-slot:top>
      <div class="v-toolbar__content" style="height: 56px;">
        <div class="v-card__title">
          <div
            class="v-input v-input--hide-details theme--light v-text-field v-text-field--single-line v-text-field--is-booted"
          >
            <div class="v-input__control">
              <div class="v-input__slot">
                <div class="v-text-field__slot">
                  <label
                    for="input-6704"
                    class="v-label theme--light"
                    style="left: 0px; right: auto; position: absolute;"
                  >
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Procurar...</font>
                    </font>
                  </label>
                  <input id="input-6704" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr
          role="separator"
          aria-orientation="vertical"
          class="v-divider v-divider--inset v-divider--vertical theme--light"
        />
        <div class="spacer"></div>

        <router-link to="/register">
          <v-btn class="mr-2" color="error" href="/" medium>
            <span class="mr-2">Novo aluno</span>
          </v-btn>
        </router-link>

        <router-view></router-view>
      </div>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Registro Acadêmico",
        align: "start",
        sortable: false,
        value: "register",
      },
      { text: "Nome", value: "name" },
      { text: "Sobrenome", value: "lastName" },
      { text: "CPF", value: "document" },
      { text: "Email", value: "email" },
      { text: "Ações", value: "actions", sortable: false },
    ],
    studens: [],
  }),
};
</script>
