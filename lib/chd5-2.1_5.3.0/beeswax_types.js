//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var hive_metastore_ttypes = require('./hive_metastore_types')


var ttypes = module.exports = {};
ttypes.QueryState = {
  'CREATED' : 0,
  'INITIALIZED' : 1,
  'COMPILED' : 2,
  'RUNNING' : 3,
  'FINISHED' : 4,
  'EXCEPTION' : 5
};
Query = module.exports.Query = function(args) {
  this.query = null;
  this.configuration = null;
  this.hadoop_user = null;
  if (args) {
    if (args.query !== undefined && args.query !== null) {
      this.query = args.query;
    }
    if (args.configuration !== undefined && args.configuration !== null) {
      this.configuration = Thrift.copyList(args.configuration, [null]);
    }
    if (args.hadoop_user !== undefined && args.hadoop_user !== null) {
      this.hadoop_user = args.hadoop_user;
    }
  }
};
Query.prototype = {};
Query.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.query = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.configuration = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.configuration.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.hadoop_user = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Query.prototype.write = function(output) {
  output.writeStructBegin('Query');
  if (this.query !== null && this.query !== undefined) {
    output.writeFieldBegin('query', Thrift.Type.STRING, 1);
    output.writeString(this.query);
    output.writeFieldEnd();
  }
  if (this.configuration !== null && this.configuration !== undefined) {
    output.writeFieldBegin('configuration', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.configuration.length);
    for (var iter7 in this.configuration)
    {
      if (this.configuration.hasOwnProperty(iter7))
      {
        iter7 = this.configuration[iter7];
        output.writeString(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.hadoop_user !== null && this.hadoop_user !== undefined) {
    output.writeFieldBegin('hadoop_user', Thrift.Type.STRING, 4);
    output.writeString(this.hadoop_user);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

QueryHandle = module.exports.QueryHandle = function(args) {
  this.id = null;
  this.log_context = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.log_context !== undefined && args.log_context !== null) {
      this.log_context = args.log_context;
    }
  }
};
QueryHandle.prototype = {};
QueryHandle.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.log_context = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

QueryHandle.prototype.write = function(output) {
  output.writeStructBegin('QueryHandle');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.log_context !== null && this.log_context !== undefined) {
    output.writeFieldBegin('log_context', Thrift.Type.STRING, 2);
    output.writeString(this.log_context);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

QueryExplanation = module.exports.QueryExplanation = function(args) {
  this.textual = null;
  if (args) {
    if (args.textual !== undefined && args.textual !== null) {
      this.textual = args.textual;
    }
  }
};
QueryExplanation.prototype = {};
QueryExplanation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.textual = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

QueryExplanation.prototype.write = function(output) {
  output.writeStructBegin('QueryExplanation');
  if (this.textual !== null && this.textual !== undefined) {
    output.writeFieldBegin('textual', Thrift.Type.STRING, 1);
    output.writeString(this.textual);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Results = module.exports.Results = function(args) {
  this.ready = null;
  this.columns = null;
  this.data = null;
  this.start_row = null;
  this.has_more = null;
  if (args) {
    if (args.ready !== undefined && args.ready !== null) {
      this.ready = args.ready;
    }
    if (args.columns !== undefined && args.columns !== null) {
      this.columns = Thrift.copyList(args.columns, [null]);
    }
    if (args.data !== undefined && args.data !== null) {
      this.data = Thrift.copyList(args.data, [null]);
    }
    if (args.start_row !== undefined && args.start_row !== null) {
      this.start_row = args.start_row;
    }
    if (args.has_more !== undefined && args.has_more !== null) {
      this.has_more = args.has_more;
    }
  }
};
Results.prototype = {};
Results.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.ready = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.columns = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = input.readString();
          this.columns.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size15 = 0;
        var _rtmp319;
        this.data = [];
        var _etype18 = 0;
        _rtmp319 = input.readListBegin();
        _etype18 = _rtmp319.etype;
        _size15 = _rtmp319.size;
        for (var _i20 = 0; _i20 < _size15; ++_i20)
        {
          var elem21 = null;
          elem21 = input.readString();
          this.data.push(elem21);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.start_row = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BOOL) {
        this.has_more = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Results.prototype.write = function(output) {
  output.writeStructBegin('Results');
  if (this.ready !== null && this.ready !== undefined) {
    output.writeFieldBegin('ready', Thrift.Type.BOOL, 1);
    output.writeBool(this.ready);
    output.writeFieldEnd();
  }
  if (this.columns !== null && this.columns !== undefined) {
    output.writeFieldBegin('columns', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.columns.length);
    for (var iter22 in this.columns)
    {
      if (this.columns.hasOwnProperty(iter22))
      {
        iter22 = this.columns[iter22];
        output.writeString(iter22);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.data.length);
    for (var iter23 in this.data)
    {
      if (this.data.hasOwnProperty(iter23))
      {
        iter23 = this.data[iter23];
        output.writeString(iter23);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.start_row !== null && this.start_row !== undefined) {
    output.writeFieldBegin('start_row', Thrift.Type.I64, 4);
    output.writeI64(this.start_row);
    output.writeFieldEnd();
  }
  if (this.has_more !== null && this.has_more !== undefined) {
    output.writeFieldBegin('has_more', Thrift.Type.BOOL, 5);
    output.writeBool(this.has_more);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ResultsMetadata = module.exports.ResultsMetadata = function(args) {
  this.schema = null;
  this.table_dir = null;
  this.in_tablename = null;
  this.delim = null;
  if (args) {
    if (args.schema !== undefined && args.schema !== null) {
      this.schema = new hive_metastore_ttypes.Schema(args.schema);
    }
    if (args.table_dir !== undefined && args.table_dir !== null) {
      this.table_dir = args.table_dir;
    }
    if (args.in_tablename !== undefined && args.in_tablename !== null) {
      this.in_tablename = args.in_tablename;
    }
    if (args.delim !== undefined && args.delim !== null) {
      this.delim = args.delim;
    }
  }
};
ResultsMetadata.prototype = {};
ResultsMetadata.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.schema = new hive_metastore_ttypes.Schema();
        this.schema.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.table_dir = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.in_tablename = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.delim = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ResultsMetadata.prototype.write = function(output) {
  output.writeStructBegin('ResultsMetadata');
  if (this.schema !== null && this.schema !== undefined) {
    output.writeFieldBegin('schema', Thrift.Type.STRUCT, 1);
    this.schema.write(output);
    output.writeFieldEnd();
  }
  if (this.table_dir !== null && this.table_dir !== undefined) {
    output.writeFieldBegin('table_dir', Thrift.Type.STRING, 2);
    output.writeString(this.table_dir);
    output.writeFieldEnd();
  }
  if (this.in_tablename !== null && this.in_tablename !== undefined) {
    output.writeFieldBegin('in_tablename', Thrift.Type.STRING, 3);
    output.writeString(this.in_tablename);
    output.writeFieldEnd();
  }
  if (this.delim !== null && this.delim !== undefined) {
    output.writeFieldBegin('delim', Thrift.Type.STRING, 4);
    output.writeString(this.delim);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BeeswaxException = module.exports.BeeswaxException = function(args) {
  Thrift.TException.call(this, "BeeswaxException")
  this.name = "BeeswaxException"
  this.message = null;
  this.log_context = null;
  this.handle = null;
  this.errorCode = 0;
  this.SQLState = '     ';
  if (args) {
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
    if (args.log_context !== undefined && args.log_context !== null) {
      this.log_context = args.log_context;
    }
    if (args.handle !== undefined && args.handle !== null) {
      this.handle = new ttypes.QueryHandle(args.handle);
    }
    if (args.errorCode !== undefined && args.errorCode !== null) {
      this.errorCode = args.errorCode;
    }
    if (args.SQLState !== undefined && args.SQLState !== null) {
      this.SQLState = args.SQLState;
    }
  }
};
Thrift.inherits(BeeswaxException, Thrift.TException);
BeeswaxException.prototype.name = 'BeeswaxException';
BeeswaxException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.log_context = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.handle = new ttypes.QueryHandle();
        this.handle.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.errorCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.SQLState = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BeeswaxException.prototype.write = function(output) {
  output.writeStructBegin('BeeswaxException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.log_context !== null && this.log_context !== undefined) {
    output.writeFieldBegin('log_context', Thrift.Type.STRING, 2);
    output.writeString(this.log_context);
    output.writeFieldEnd();
  }
  if (this.handle !== null && this.handle !== undefined) {
    output.writeFieldBegin('handle', Thrift.Type.STRUCT, 3);
    this.handle.write(output);
    output.writeFieldEnd();
  }
  if (this.errorCode !== null && this.errorCode !== undefined) {
    output.writeFieldBegin('errorCode', Thrift.Type.I32, 4);
    output.writeI32(this.errorCode);
    output.writeFieldEnd();
  }
  if (this.SQLState !== null && this.SQLState !== undefined) {
    output.writeFieldBegin('SQLState', Thrift.Type.STRING, 5);
    output.writeString(this.SQLState);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

QueryNotFoundException = module.exports.QueryNotFoundException = function(args) {
  Thrift.TException.call(this, "QueryNotFoundException")
  this.name = "QueryNotFoundException"
};
Thrift.inherits(QueryNotFoundException, Thrift.TException);
QueryNotFoundException.prototype.name = 'QueryNotFoundException';
QueryNotFoundException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

QueryNotFoundException.prototype.write = function(output) {
  output.writeStructBegin('QueryNotFoundException');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ConfigVariable = module.exports.ConfigVariable = function(args) {
  this.key = null;
  this.value = null;
  this.description = null;
  if (args) {
    if (args.key !== undefined && args.key !== null) {
      this.key = args.key;
    }
    if (args.value !== undefined && args.value !== null) {
      this.value = args.value;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
  }
};
ConfigVariable.prototype = {};
ConfigVariable.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.key = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.value = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.description = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ConfigVariable.prototype.write = function(output) {
  output.writeStructBegin('ConfigVariable');
  if (this.key !== null && this.key !== undefined) {
    output.writeFieldBegin('key', Thrift.Type.STRING, 1);
    output.writeString(this.key);
    output.writeFieldEnd();
  }
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 2);
    output.writeString(this.value);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 3);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
