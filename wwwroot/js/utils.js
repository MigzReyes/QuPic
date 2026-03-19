export function debug(scope, message) {
    console.log(scope + ": " + message);
}

export function uploadImg(elementId) {
    const input = elementId;
    const file = input.files[0];

    if (!file) {
        alert("Please select an image");
        return;
    }

    if (!["image/png", "image/jpeg"].includes(file.type)) {
        alert("Only PNG and JPEG is format supported");
        return;
    }

    if (file.size > 25 * 1024 * 1024) {
        alert("Image too large!");
        return;
    }

    return file;
}

export async function uploadMemories(img, to, from, message) {
    
}