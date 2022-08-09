export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(l => {
        if (l[objPropName] === itemId) {
            return {...l, ...newObjProps}
        }
        return l;
    })
}