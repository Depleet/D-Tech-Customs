"use strict";

exports.mod = () => {
    
    if (!serverConfig.rebuildCache) {
        return;
    }
	
    logger.logInfo("Caching: Life's Mechanism's w/ D33P's SMG in Holster");
	
    let base = fileIO.parse(fileIO.read(db.user.cache.items));

    for (let file in base.data) {
        let fileData = base.data[file];
        
        if (fileData._name === "Default Inventory") {
            fileData._props.Slots[5]._props.filters[0].Filter = ["5a341c4086f77401f2541505"];
            };
        
        if (fileData._name == "Default Inventory") {
            fileData._props.Slots[11]._props.filters[0].Filter = ["5645bcb74bdc2ded0b8b4578"];
            };
		
		if (fileData._name == "Default Inventory") {
            fileData._props.Slots[2]._props.filters[0].Filter = ["5447b5cf4bdc2d65278b4567", "5447b5e04bdc2d62278b4567"];
            };
            
            base.data[fileData._id] = fileData;

        }
    fileIO.write("user/cache/items.json", base);
}