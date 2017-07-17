import IOBuffer from 'iobuffer';

export default class TIFFEncoder extends IOBuffer {
    constructor() {
        super();
    }

    encode(image, options) {
        this.encodeHeader();
        this.encodeIFD(image, options);
        this.encodeImageData(image);
    }

    encodeHeader() {
        // Byte order
        this.writeUint16(0x4949); // little endian
        // Magic number
        this.writeUint16(42);
        // Offset of the first IFD
        this.writeUint32(this.offset + 4);
    }

    encodeIFD(image, options) {
        // todo encode IFDs
    }

    encodeImageData(image) {
        // todo encode image
    }
}
