export function nameTransform (name) {
    var without_hyphen_name = name.replace(/-/g, "_");
    var without_space_name = without_hyphen_name.replace(/ /g, "_");
    var without_accent_name = without_space_name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return without_accent_name;
}