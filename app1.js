const balu = {
    nome: "Balu Brasil",
    cor: "preto",
    altura: 0.58,
    peso: 11.5,
    raca: "vira-lata",

    latir() {
        alert("au au");
    },

    comer(kg) {
        this.peso = this.peso + kg;
    },

    cagar(kg) {
        this.peso = this.peso - kg;
        alert("Caguei");
    },

    saudar() {
        let msg =`Olá meu nome é ${this.nome}`;
        msg = msg+`Cor: ${}`
    }
};