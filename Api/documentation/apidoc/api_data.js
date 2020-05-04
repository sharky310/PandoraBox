define({ "api": [
  {
    "type": "get",
    "url": "/api/userType",
    "title": "GetUserTypes",
    "name": "GetUserTypes",
    "group": "GetUserTypes",
    "version": "0.0.0",
    "filename": "core/controllers/userType/get-user-type-controller.js",
    "groupTitle": "GetUserTypes"
  },
  {
    "type": "get",
    "url": "/api/project",
    "title": "GetProject",
    "name": "GetProject",
    "group": "Project",
    "version": "0.0.0",
    "filename": "core/controllers/project/get-project-controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "/api/profile/create",
    "title": "PostUser",
    "name": "AddUserController",
    "group": "User",
    "version": "0.0.0",
    "filename": "core/controllers/user/add-user-controller.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/profile/list",
    "title": "GetListUsers",
    "name": "GetListUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "active",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "core/controllers/user/get-list-user-controller.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/profile",
    "title": "GetUserProfile",
    "name": "GetUserProfile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "core/controllers/user/get-profile-controller.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/profile/modify",
    "title": "PutUserProfile",
    "name": "ModifyUserProfileController",
    "group": "User",
    "version": "0.0.0",
    "filename": "core/controllers/user/modify-modify-user-profile-controller.js",
    "groupTitle": "User"
  }
] });
