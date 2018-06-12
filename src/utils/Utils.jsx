

var BASE_IMAGE_FOLDER_FOR_COMPONENTS_1 = '../images/';
var PUBLIC_IMAGE_FOLDER =  "/images/";

export function getImageForComponents(nameWithExtension)
{
    return BASE_IMAGE_FOLDER_FOR_COMPONENTS_1 + nameWithExtension;
}

export function getImageFromPublicFolder(nameWithExtension){
    return PUBLIC_IMAGE_FOLDER + nameWithExtension;
}