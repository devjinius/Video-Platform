import Sequelize from 'sequelize';

// username, password부분 현재 그대로 노출중이므로
// 적지 않고 커밋하겠음
var sequelize = new Sequelize('video_db', 'username', 'password', {
  host: 'video-db.cjxcuyxgjbk6.ap-northeast-2.rds.amazonaws.com',
  dialect: 'postgres'
});

var db = (module.exports = {});

// 지금은 한파일인데 나중에 변경예정
db['TEST_SEQ'] = sequelize.define(
  'TEST_SEQ',
  {
    test_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
  },
  {
    classMethods: {},
    tableName: 'TEST_SEQ',
    freezeTableName: true, // 테이블 이름 복수형 되는거 방지
    timestamps: false // created_at updated_at 자동생성 일단은 false
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// module.exports = db;
