-- migration.sql
-- Supabase migration for user, wallet, auction_house, item, auction, and bid tables

create type role as enum ('admin', 'user', 'moderator');
create type auction_status as enum ('open', 'closed', 'cancelled');
create type bid_state as enum ('active', 'outbid', 'won', 'refunded');

create table user (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  username text not null,
  profile_image_url text,
  created_at timestamp not null default now(),
  role role not null,
  verified boolean not null default false
);

create table wallet (
  id uuid primary key default gen_random_uuid(),
  public_key text not null,
  created_at timestamp not null default now(),
  owner uuid not null references users(id) on delete cascade
);

create table auction_house (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamp not null default now(),
  owner uuid not null references users(id) on delete cascade,
  fee_account text not null,
  treasury_account text not null,
  commission_percentage numeric not null,
  treasury_withdrawal_destination text not null,
  program_id text not null
);

create table item (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  images text[],
  owner uuid not null references users(id) on delete cascade,
  category text,
  created_at timestamp not null default now(),
  token_mint text,
  token_metadata jsonb,
  attributes jsonb,
  creator_address text,
  auction_house uuid references auction_house(id) on delete set null
);

create table auction (
  id bigint primary key generated always as identity,
  created_by uuid not null references users(id) on delete cascade,
  description text not null,
  highest_bid bigint not null default 0,
  current_highest_bidder bigint not null default 0,
  expiry_date timestamp not null,
  created_at timestamp not null default now(),
  auction_house uuid references auction_house(id) on delete cascade,
  status auction_status not null,
  minimum_bid_increment bigint,
  reserve_price bigint,
  instant_sale_price bigint,
  is_settled boolean not null default false
);