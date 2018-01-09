interface Filter {
    str: string;
    mask ?: number, 
    arr ? : Filter[];
}

const data: Filter[] = [
    {
        str: 'Filtros Mais Usados',
        arr: [
            { str: 'Café da manhã incluído' },
            { str: 'Piscina' },
            { str: 'Wi-Fi grátis' },
            { str: 'Estacionamento grátis' },
            { str: 'Aceita animais de estimação' }
        ]
    },
    {
        str: 'Estrelas',
        arr: [
            { str: '5 estrelas' },
            { str: '4 estrelas' },
            { str: '3 estrelas' },
            { str: '2 estrelas' },
            { str: '1 estrelas' },
            { str: 'Sem classificação' }
        ]
    },
    {
        str: 'Tipo de tarifa',
        arr: [
            { str: 'Reembolsável' },
            { str: 'Não Reembolsável' }
        ]
    },
    {
        str: 'Bairro',
        arr: [
            { str: 'Moema' },
            { str: 'Itaim' },
            { str: 'Vila Olímpia' },
            { str: 'Vila Nova' },
            { str: 'Jardins' },
            { str: 'Pinheiros' },
            { str: 'Vila Madalena' }
        ]
    },
    {
        str: 'Ponto de Interesse',
        arr: [
            { str: 'Álcool' },
            { str: 'Mulheres' },
            { str: 'Jogo' },
            { str: 'Loucuras' },
            { str: 'Aventuras' }
        ]
    },
    {
        str: 'Tipo de Acomodação',
        arr: [
            { str: 'Álcool' },
            { str: 'Mulheres' },
            { str: 'Jogo' },
            { str: 'Loucuras' },
            { str: 'Aventuras' }
        ]
    },
    {
        str: 'Comodidades',
        arr: [
            { str: 'Piscina' },
            { str: 'TV' },
        ]
    },
    {
        str: 'Tipos de Hotel e de Viagem',
        arr: [
            { str: 'Botique' },
            { str: 'Campo' },
            { str: 'Luxo' },
            { str: 'Executivo' },
            { str: 'Jardins' }
        ]
    },
    {
        str: 'Acessibilidade',
        arr: [
            { str: 'Álcool' },
            { str: 'Mulheres' },
            { str: 'Jogo' },
            { str: 'Loucuras' },
            { str: 'Aventuras' }
        ]
    },
    {
        str: 'Refeição',
        arr: [
            { str: 'Só hospedagem' },
            { str: 'Café da Manhã Incluído' }
        ]
    }
];

export default < Filter[] > (function(data) {
    var i = 0;
    for (i = 0; i < data.length; i++) {
        self.vars.filter.bit.masks.push({
            str: arr[i].str,
            mask: 1 << i,
            arr: []
        });
        self.vars.filter.bit.mask |= 1 << i;
        for (j = 0; j < arr[i].data.length; j++) {
            self.vars.filter.bit.masks[i].data.push({
                str: arr[i].arr[j].str,
                val: false,
                mask: 1 << j
            });
            self.vars.filter.bit.masks[i].mask |= self.vars.filter.bit.masks[i].mask
        }
    }
    self.show.masks = new Array(self.vars.filter.bit.masks.length);
    for (i = 0; i < self.show.masks.length; i++)
        self.show.masks[i] = true;

    return data;
}(data));
