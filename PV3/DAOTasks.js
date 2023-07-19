"use strict";
class DAOTasks {
constructor(pool) { this.pool == pool}
getAllTasks(email, callback) {
    this.pool.getConnection(function(err, connection) {
        if (err) callback(new Error("Error de conexión a la base de datos"));
        else{
            connection.query("SELECT  " ,
            [email],function(err, rows){
                connection.release();
                if (err) callback(new Error("Error de acceso a la base de datos"));
                else{
                    if (rows.length === 0) callback(null, false);
                    else callback(null, true);
                }
            });
        }
}


insertTask(email, task, callback) {  }
markTaskDone(idTask, callback) {}
deleteCompleted(email, callback) {  }

}
module.exports = DAOTasks;