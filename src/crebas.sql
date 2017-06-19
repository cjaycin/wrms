/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2015/4/15 23:18:24                           */
/*==============================================================*/


alter table tbl_c_admin
   drop primary key;

drop table if exists tbl_c_admin;

drop index Index_1 on tbl_c_contract;

alter table tbl_c_contract
   drop primary key;

drop table if exists tbl_c_contract;

alter table tbl_c_customer
   drop primary key;

drop table if exists tbl_c_customer;

drop index Index_1 on tbl_c_item;

alter table tbl_c_item
   drop primary key;

drop table if exists tbl_c_item;

drop index Index_1 on tbl_c_project;

alter table tbl_c_project
   drop primary key;

drop table if exists tbl_c_project;

/*==============================================================*/
/* Table: tbl_c_admin                                           */
/*==============================================================*/
create table tbl_c_admin
(
   id                   bigint not null primary key,
   loginid              varchar(20),
   password             varchar(50),
   name                 varchar(50)
);

/*==============================================================*/
/* Table: tbl_c_contract                                        */
/*==============================================================*/
create table tbl_c_contract
(
   id                   int not null auto_increment primary key,
   customerid           bigint,
   code                 varchar(15),
   hdate                date,
   jdate                date,
   totalprice           double
);

/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create index Index_1 on tbl_c_contract
(
   customerid
);

/*==============================================================*/
/* Table: tbl_c_customer                                        */
/*==============================================================*/
create table tbl_c_customer
(
   id                   int not null auto_increment primary key,
   name                 varchar(20),
   address              varchar(255),
   mobile               varchar(20),
   tel                  varchar(20)
);

/*==============================================================*/
/* Table: tbl_c_item                                            */
/*==============================================================*/
create table tbl_c_item
(
   id                   bigint not null primary key auto_increment,
   project_id           bigint,
   item_name            varchar(50),
   item_per             varchar(10),
   item_price           double,
   item_count           int,
   item_total           double,
   note                 varchar(255)
);
/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create index Index_1 on tbl_c_item
(
   project_id
);

/*==============================================================*/
/* Table: tbl_c_project                                         */
/*==============================================================*/
create table tbl_c_project
(
   id                   bigint not null primary key auto_increment,
   contract_id          bigint,
   name                 varchar(50),
   price                double
);


/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create index Index_1 on tbl_c_project
(
   contract_id
);

