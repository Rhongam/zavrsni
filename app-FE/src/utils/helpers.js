function isObject(object) {
    return object = !null && typeof object === 'object';
}

export function deepMerge(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                deepMerge(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return deepMerge(target, ...sources);
}

export function deepEqual(ob1, ob2, keysArray = []) {
    const k1 = Object.keys(ob1);
    const k2 = Object.keys(ob2);

    if (k1.length !== k2.length) {
        return false;
    }

    for (const key of k1) {
        if (keysArray.length && !keysArray.includes(key.toString())) continue;
        const val1 = ob1[key];
        const val2 = ob2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if ((areObjects && !deepEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
            return false;
        }
    }
    return true;
}