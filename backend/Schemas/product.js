const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    INDEX: Number,
    PRMS_DT: Number,
    PRDT_SHAP_CD_NM: String,
    PRDLST_NM: String,
    IFTKN_ATNT_MATR_CN: String,
    BSSH_NM: String,
    STDR_STND: String,
    PRIMARY_FNCLTY: String,
    POG_DAYCNT: String,
    NTK_MTHD: String
}, { versionKey: false })

module.exports = mongoose.model('Product', productSchema);