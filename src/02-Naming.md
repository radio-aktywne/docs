---
slug: /naming
title: Naming
---

# Naming

`radio-aktywne` uses multiple naming conventions
to keep the projects organized and consistent.

## Services

The idea is to use fun names for services.
It's a controversial one, but it has its purpose.
Services evolve over time, so if you choose a descriptive name,
it might not be accurate in the future.
And changing names in a distributed system is a pain.
So just choose some convention with fun names,
stick to it and pick names at random from the list.

Here are some general guidelines for good names:

- Use names that are easy to pronounce and remember.
- Avoid using names that are too similar to each other.
- Use names that are neither too long nor too short.
- Stick to one word names.
- Avoid uncommon letters, phonemes or combinations.

The conventions that we use for different types of services are:

- [Names of animals](https://namingschemes.com/Animals) for services.
- [Names of minerals](https://namingschemes.com/Minerals) for databases.
- [Names of flowers](https://namingschemes.com/Flowers) for apps.

## Packages

On the other hand, packages should be named descriptively,
so the name should reflect the purpose of the package.

It's up to you to pick a name for your package,
but use one that is easy to understand and remember.

Common practice is to include an abbreviation of the language
the package is written for in the package name.

## Templates

Templates should be named according to
the following convention: `<type>` or `<type>-<subtype>`.

For example, template for devcontainers should be named `devcontainer`,
while template for `Next.js` apps should be named `app-nextjs`.

## Devcontainers

Devcontainers should be named according to the same convention as templates.

## Repositories

Repositories for services and packages
should be named the same as the service or package.

Repositories for templates should prefix
the template name with `template-`.

Repositories for devcontainers should prefix
the devcontainer name with `devcontainer-`.
