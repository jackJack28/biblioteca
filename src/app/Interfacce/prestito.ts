export interface Prestito {
    prestitoId: {
        idLibro: number,
        idUtente: number,
        timestampPrestitoInizio: string,
    }
    libro: {
        idLibro: number,
        titolo: string,
        categoria: string,
        dataPubblicazione: string,
        //listaAutori: [],
    }
    utente: {
        nome: string,
        cognome: string,
        dataNascita: string,
        numeroTelefono: number,
        id: number,
    }
    timestampPrestitoFine: null,
}
