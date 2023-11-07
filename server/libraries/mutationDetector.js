// Definimos la función para detectar mutaciones
function hasMutation(dna) {
    // Validamos que las letras en las secuencias sean solo "A", "T", "C" o "G"
    const validChars = ['A', 'T', 'C', 'G'];
    for (let i = 0; i < dna.length; i++) {
        for (let j = 0; j < dna[i].length; j++) {
            if (!validChars.includes(dna[i][j])) {
                return false; // Caracter no válido
            }
        }
    }

    // Buscamos secuencias repetidas en sentido horizontal
    for (let i = 0; i < dna.length; i++) {
        for (let j = 0; j <= dna[i].length - 4; j++) {
            const sequence = dna[i].substring(j, j + 4);
            if (sequence === 'AAAA' || sequence === 'TTTT' || sequence === 'CCCC' || sequence === 'GGGG') {
                return true; // Mutación detectada
            }
        }
    }

    // Buscamos secuencias repetidas en sentido vertical
    for (let i = 0; i <= dna.length - 4; i++) {
        for (let j = 0; j < dna[i].length; j++) {
            const sequence = dna[i][j] + dna[i + 1][j] + dna[i + 2][j] + dna[i + 3][j];
            if (sequence === 'AAAA' || sequence === 'TTTT' || sequence === 'CCCC' || sequence === 'GGGG') {
                return true; // Mutación detectada
            }
        }
    }

    // Buscamos secuencias repetidas en sentido diagonal (de izquierda a derecha)
    for (let i = 0; i <= dna.length - 4; i++) {
        for (let j = 0; j <= dna[i].length - 4; j++) {
            const sequence = dna[i][j] + dna[i + 1][j + 1] + dna[i + 2][j + 2] + dna[i + 3][j + 3];
            if (sequence === 'AAAA' || sequence === 'TTTT' || sequence === 'CCCC' || sequence === 'GGGG') {
                return true; // Mutación detectada
            }
        }
    }

    // Buscamos secuencias repetidas en sentido diagonal (de derecha a izquierda)
    for (let i = 0; i <= dna.length - 4; i++) {
        for (let j = 3; j < dna[i].length; j++) {
            const sequence = dna[i][j] + dna[i + 1][j - 1] + dna[i + 2][j - 2] + dna[i + 3][j - 3];
            if (sequence === 'AAAA' || sequence === 'TTTT' || sequence === 'CCCC' || sequence === 'GGGG') {
                return true; // Mutación detectada
            }
        }
    }

    return false; // No se detectó mutación
}

module.exports = {
    hasMutation,
};