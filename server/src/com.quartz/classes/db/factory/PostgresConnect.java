package com.quartz.classes.db.factory;

import com.quartz.classes.db.ConnectPostgres;
import com.quartz.classes.db.IConnect;

public class PostgresConnect extends  CrudFactory{
    @Override
    protected IConnect createConnection() {
        return new ConnectPostgres();
    }
}
