const employee = {
    name: "Sam",
    streetAddress: "11 Broadyway", 
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const copyObj = {...obj};
    copyObj[key] = value;
    return copyObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj;
};

function deleteFromEmployeeByKey(obj, key) {
    const newObj = Object.assign({}, obj);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}