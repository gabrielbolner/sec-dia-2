INSERT INTO users (full_name, email, added_in, modified_in, profile_image, password,phone,active)
VALUES('Sr Administrador', 'admin@cwi.com.br',  '2023-03-02', '2023-03-08',
 'https://this-person-does-not-exist.com/img/avatar-113a6c76357dc887908dcc5177201493.jpg',
 '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG','123456789', true);

INSERT INTO users (full_name, email, added_in, modified_in, profile_image, password,phone,active)
VALUES('Joao Silva', 'joao@cwi.com.br', '2023-03-02', '2023-03-08',
 'https://this-person-does-not-exist.com/img/avatar-116f42d2361b5d8337eb90bbdce9f808.jpg',
 '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', '123456789',true);

INSERT INTO users (full_name, email, added_in, modified_in, profile_image, password,phone,active)
VALUES('Claudio', 'claudio@cwi.com.br',  '2023-03-02', '2023-03-08',
  'https://this-person-does-not-exist.com/img/avatar-112d48a913e95e4d6e6af1b1df570d84.jpg',
  '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG','123456789', true);

insert into permission (function, user_id) values ('ADMIN', 1);
insert into permission (function, user_id) values ('USER', 1);
insert into permission (function, user_id) values ('USER', 2);
insert into permission (function, user_id) values ('USER', 3);