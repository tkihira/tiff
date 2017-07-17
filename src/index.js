import TIFFDecoder from './tiffDecoder';
import TIFFEncoder from './tiffEncoder';

function decodeTIFF(data, options = {}) {
    const decoder = new TIFFDecoder(data, options);
    return decoder.decode(options);
}

function encodeTIFF(image, options = {}) {
    const decoder = new TIFFEncoder(options);
    return decoder.encode(image, options);
}

export {
    decodeTIFF as decode,
    encodeTIFF as encode
};
