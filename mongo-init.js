db.createUser(
  {
    user: 'wavelib_photo',
    pwd: 'wavelib_photo',
    roles: [
      {
        role: 'readWrite',
        db: 'wavelib_photo'
      }
    ]
  }
);
