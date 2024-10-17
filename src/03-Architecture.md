---
slug: /architecture
title: Architecture
---

# Architecture

`radio-aktywne` relies on a few different systems to operate.
Each of these systems consists of multiple services
that work together to provide the desired functionality.

The idea for each service is to do one thing and do it well.

## Broadcast

Broadcast system is responsible for streaming audio to listeners
and managing all the stuff related to broadcasts.

Services:

- [`beaver`](https://github.com/radio-aktywne/beaver)
- [`dingo`](https://github.com/radio-aktywne/dingo)
- [`gecko`](https://github.com/radio-aktywne/gecko)
- [`loris`](https://github.com/radio-aktywne/loris)
- [`mantis`](https://github.com/radio-aktywne/mantis)
- [`numbat`](https://github.com/radio-aktywne/numbat)
- [`octopus`](https://github.com/radio-aktywne/octopus)
- [`pelican`](https://github.com/radio-aktywne/pelican)
- [`quokka`](https://github.com/radio-aktywne/quokka)

Databases:

- [`amber`](https://github.com/radio-aktywne/amber)
- [`emerald`](https://github.com/radio-aktywne/emerald)
- [`graphite`](https://github.com/radio-aktywne/graphite)
- [`howlite`](https://github.com/radio-aktywne/howlite)
- [`minium`](https://github.com/radio-aktywne/minium)
- [`sapphire`](https://github.com/radio-aktywne/sapphire)

Apps:

- [`aster`](https://github.com/radio-aktywne/aster)
- [`daisy`](https://github.com/radio-aktywne/daisy)
- [`jasmine`](https://github.com/radio-aktywne/lavender)
- [`lotus`](https://github.com/radio-aktywne/lotus)
- [`magnolia`](https://github.com/radio-aktywne/magnolia)
- [`poppy`](https://github.com/radio-aktywne/poppy)
- [`tulip`](https://github.com/radio-aktywne/tulip)

Below you can find an architecture diagram for the system.

![Architecture diagram for broadcast system](/architecture/broadcast.svg)

## Users

Users system is responsible for managing users and authenticating them.

Services:

- [`falcon`](https://github.com/radio-aktywne/falcon)
- [`scorpion`](https://github.com/radio-aktywne/scorpion)

Databases:

- [`diamond`](https://github.com/radio-aktywne/diamond)
- [`obsidian`](https://github.com/radio-aktywne/obsidian)

Apps:

- [`crocus`](https://github.com/radio-aktywne/crocus)
- [`orchid`](https://github.com/radio-aktywne/orchid)

Below you can find an architecture diagram for the system.

![Architecture diagram for users system](/architecture/users.svg)
