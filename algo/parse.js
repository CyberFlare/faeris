export const basicData = (charData ) => {
    const char = charData.data.avatar_list[0];

    const name = char.name_mi18n;
    const lvl = char.level;
    const rarity = char.rarity;
    const mindscape = char.rank;
    const weaponName = char.weapon.name;
    const weaponLvl = char.weapon.level;
    const weaponRarity = char.weapon.rarity;
    const overClock = char.weapon.star;
    return { name, lvl, rarity, mindscape, weaponName, weaponLvl, weaponRarity, overClock };
};

export const diskInfo = (charData,diskNum) => {
    const onlyDisks = charData.data.avatar_list[0].equip[diskNum];

    const diskName = onlyDisks.name;
    const diskLvl = onlyDisks.level;
    const diskRarity = onlyDisks.rarity;
    const mainStat = {
        name: onlyDisks.main_properties[0].property_name,
        value: onlyDisks.main_properties[0].base
    }
    const subStats = [];
    for (let i = 0; i < onlyDisks.append_properties.length; i++) {
        subStats.push(subStatInfo(charData,diskNum,i));
    }
    return { diskName, diskLvl, diskRarity, mainStat, subStats };
};

export const subStatInfo = (charData,diskNum,subNum) => {
    const subTree = charData.data.avatar_list[0].equip[diskNumber].properties[attributeNumber];
    
    let subStatName=  subTree.property_name;
    const subStatVal = subTree.base;
    const add = subTree.add;
    if(subStatVal.includes('%')) {
        subStatName += ' %';
    }

    return { name: subStatName, value: subStatVal, add: add };
};

