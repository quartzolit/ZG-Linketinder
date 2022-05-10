package com.quartz.classes.db.factory;

import com.quartz.classes.db.IConnect;

public abstract class CrudFactory {

    protected abstract IConnect createConnection();
}
