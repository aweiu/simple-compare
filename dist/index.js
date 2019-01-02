export default function (oldData, newData) {
    const rs = { count: 0, difference: {}, raw: oldData };
    if (JSON.stringify(oldData) === JSON.stringify(newData))
        return rs;
    const keys = new Set(Object.keys(oldData).concat(Object.keys(newData)));
    for (let key of keys) {
        if (oldData[key] != newData[key] && JSON.stringify(oldData[key]) !== JSON.stringify(newData[key])) {
            rs.count++;
            rs.difference[key] = newData[key];
        }
    }
    return rs;
}
