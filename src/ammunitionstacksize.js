"use strict";

exports.mod = () => {
    if (!serverConfig.rebuildCache) {
        return;
    }
	
    logger.logInfo("Cached: AmmunitionStackSize - GIMME THE UZI 9MM");
	
    let base = fileIO.parse(fileIO.read(db.user.cache.items));
	
	for (let file in base.data) {
        let fileData = base.data[file];
		
			//Kinetic Bullet Stacks
		if (fileData._props.ammoType == "bullet" && fileData._props.ItemSound == "ammo_singleround") {
            fileData._props.StackMaxSize = 1500;
            }

			//Explosive Bullet Stacks
		if (fileData._props.ExplosionType == "smallgrenade_expl" && fileData._props.ItemSound == "ammo_singleround") {
            fileData._props.StackMaxSize = 800;
            }
			
			//Kinetic 12Gauge Shell Stacks
		if (fileData._props.Caliber == "Caliber12g" && fileData._props.ItemSound == "ammo_shotgun") {
            fileData._props.StackMaxSize = 500;
            }

			//Kinetic 20Gauge Shell Stacks
		if (fileData._props.Caliber == "Caliber20g" && fileData._props.ItemSound == "ammo_shotgun") {
            fileData._props.StackMaxSize = 500;
            }
			
			//Explosive 12/20Gauge Shell Stacks
		if (fileData._props.ExplosionType == "smallgrenade_expl" && fileData._props.ItemSound == "ammo_shotgun") {
            fileData._props.StackMaxSize = 500;
            }
			
        base.data[fileData._id] = fileData;
    }
	
    fileIO.write("user/cache/items.json", base);
}