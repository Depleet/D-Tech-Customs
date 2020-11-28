"use strict";

exports.mod = () => {
    if (!serverConfig.rebuildCache) {
        return;
    }
	
    logger.logInfo("Cached: Armouredrigging - Under Armour Enabled");
	
    let base = fileIO.parse(fileIO.read(db.user.cache.items));
	
	for (let file in base.data) {
        let fileData = base.data[file];
		
			//Rig - armour block check
		if (fileData._props.BlocksArmorVest == true) {
            fileData._props.BlocksArmorVest = false;
            }
 
        base.data[fileData._id] = fileData;
    }
	
    fileIO.write("user/cache/items.json", base);
}