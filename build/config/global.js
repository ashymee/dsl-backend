"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseAdmin = exports.collections = exports.firestore = exports.db = exports.global = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var firebase_1 = __importDefault(require("firebase"));
var firebase_admin_1 = __importDefault(require("firebase-admin"));
var serviceAccountKey_json_1 = __importDefault(require("./serviceAccountKey.json"));
dotenv_1.default.config();
var _a = process.env, HOST = _a.HOST, HOST_URL = _a.HOST_URL, FIREBASE_API_KEY = _a.FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN = _a.FIREBASE_AUTH_DOMAIN, FIREBASE_DB_URL = _a.FIREBASE_DB_URL, FIREBASE_PROJECT_ID = _a.FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET = _a.FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID = _a.FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID = _a.FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID = _a.FIREBASE_MEASUREMENT_ID;
exports.global = {
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: FIREBASE_API_KEY,
        authDomain: FIREBASE_AUTH_DOMAIN,
        databaseURL: FIREBASE_DB_URL,
        projectId: FIREBASE_PROJECT_ID,
        storageBucket: FIREBASE_STORAGE_BUCKET,
        messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
        appId: FIREBASE_APP_ID,
        measurementId: FIREBASE_MEASUREMENT_ID,
    },
};
exports.db = firebase_1.default.initializeApp(exports.global.firebaseConfig);
exports.firestore = exports.db.firestore();
exports.collections = {
    students: exports.firestore.collection('students'),
    users: exports.firestore.collection('users'),
    tweets: exports.firestore.collection('tweets'),
};
exports.firebaseAdmin = firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccountKey_json_1.default),
    databaseURL: 'https://dsl-backend-default-rtdb.firebaseio.com',
});
//# sourceMappingURL=global.js.map