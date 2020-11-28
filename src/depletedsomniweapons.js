"use strict";

exports.mod = () => {
    if (!serverConfig.rebuildCache) {
        return;
    }

    logger.logInfo("Cached: D.O.W; Depleted's.Omni.Weapons_configuration");
	
    let base = fileIO.parse(fileIO.read(db.user.cache.items));

	for (let file in base.data) {
        let fileData = base.data[file];

//Tactical section
		//TACTICAL ATTACHMENT ACCURACY modifier (must be within 0.00000 and 100.00000)
		if (fileData._name.includes("tactical") && fileData._props.ItemSound == "mod") {
            fileData._props.Accuracy = 7;
            }

		//TACTICAL ATTACHMENT ERGONOMICS modifier (must be within 0.00000 and 100.00000)
		if (fileData._name.includes("tactical") && fileData._props.ItemSound == "mod") {
            fileData._props.Ergonomics = 3;
            }

		//TACTICAL ATTACHMENT RECOIL modifier (must be within 0.00000 and 100.00000)
		if (fileData._name.includes("tactical") && fileData._props.ItemSound == "mod") {
            fileData._props.Recoil = -6;
            }

//Foregrip section
		//FOREGRIP ATTACHMENT ACCURACY modifier (must be within 0.00000 and 100.00000)
		if (fileData._name.includes("foregrip") && fileData._props.ItemSound == "mod") {
            fileData._props.Accuracy = 15;
            }

		//FOREGRIP ATTACHMENT ERGONOMICS modifier (must be within 0.00000 and 100.00000)
		if (fileData._name.includes("foregrip") && fileData._props.ItemSound == "mod") {
            fileData._props.Ergonomics = 8;
            }

		//FOREGRIP ATTACHMENT RECOIL modifier (must be within 0.00000 and 100.00000)
		if (fileData._name.includes("foregrip") && fileData._props.ItemSound == "mod") {
            fileData._props.Recoil = -6;
            }

//Stock section
		//STOCK ATTACHMENT ACCURACY modifier (must be within 0.00000 and 100.00000)
		if (fileData._name.includes("stock") && fileData._props.ItemSound == "mod") {
            fileData._props.Accuracy = 3;
            }

		//STOCK ATTACHMENT ERGONOMICS modifier (must be within 0.00000 and 100.00000)
		if (fileData._name.includes("stock") && fileData._props.ItemSound == "mod") {
            fileData._props.Ergonomics = 10;
            }

		//STOCK ATTACHMENT RECOIL modifier (must be within 0.00000 and 100.00000)
		if (fileData._name.includes("stock") && fileData._props.ItemSound == "mod") {
            fileData._props.Recoil = -5;
            }

//Surpressor/silencer section
		//SURPRESSOR ATTACHMENT ACCURACY modifier (must be within 0.00000 and 100.00000)
		if (fileData._name.includes("silencer") && fileData._props.ItemSound == "mod") {
            fileData._props.Accuracy = 5.55;
            }

		//SURPRESSOR ATTACHMENT ERGONOMICS modifier (must be within 0.00000 and 100.00000)
		if (fileData._name.includes("silencer") && fileData._props.ItemSound == "mod") {
            fileData._props.Ergonomics = -10;
            }

		//SURPRESSOR ATTACHMENT RECOIL modifier (must be within 0.00000 and 100.00000)
		if (fileData._name.includes("silencer") && fileData._props.ItemSound == "mod") {
            fileData._props.Recoil = -5.55;
            }
			
		//SURPRESSOR ATTACHMENT VELOCITY modifier (must be within 0.00000 and 100.00000)
		if (fileData._name.includes("silencer") && fileData._props.ItemSound == "mod") {
            fileData._props.Velocity = 3.33;
            }
			
        base.data[fileData._id] = fileData;
    }

    fileIO.write("user/cache/items.json", base);
}