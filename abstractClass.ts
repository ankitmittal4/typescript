abstract class TakePhoto {
    constructor(
        public camera: string,
        public time: number,
    ) { }

    abstract openCamera(): void //must be override

    confirmPhoto(): number { //directly inherited and override also
        console.log("12");
        return 12;
    }
}

// const user = new TakePhoto("Rear", 10);

class Instagram extends TakePhoto {
    constructor(
        public camera: string,
        public time: number,
        public post: string
    ) {
        super(camera, time);
    }

    openCamera(): void {
        console.log("In open camera");
    }

    // confirmPhoto(): number {
    //     console.log("90");
    //     return 90;
    // }
}

const user = new Instagram("Rear", 10, "Vlog");
user.openCamera();
user.confirmPhoto();