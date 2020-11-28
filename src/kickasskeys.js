"use strict";

exports.mod = () => {
    if (!serverConfig.rebuildCache) {
        return;
    }

    logger.logInfo("Cached: Kick Ass Keys - No more limited usage keys!");
	
	let base = fileIO.parse(fileIO.read(db.user.cache.items));

    for (let file in base.data) {
        let data = base.data[file];
		data._props.MaximumNumberOfUsage = 0;
        base.data[file] = data;
    }

    fileIO.write(db.user.cache.items, base);
	
}