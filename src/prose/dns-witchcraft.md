---
path: '/prose/an-introduction-to-dns-witchcraft'
title: 'An introduction to DNS witchcraft'
date: 'January 13, 2018'
author: 'Matthew October'
---

As modern day web surfers, we’ve all grown to admire our internet browsers.

Because no matter the request, our browser is always up to the challenge. Looking for a new book to read? Not a problem: open Google Chrome, type in “www.goodreads.com”, press “enter” and, presto, you’re on your way.

But have you ever wondered what actually happens between the time you hit your “enter” key and the time your browser renders your requested webpage? You know, that whole half second of purgatorial anguish.

If not, well, let me inform you: magic.

Like everything that happens online, it just seems to work _automagically_. And only a small, reserved group of wizards (tech nerds) possess the power to comprehend and relate these dark arts.

Now, I’m not claiming to be one of those wizards necessarily, but hold on to these crystals while I fetch my Elder Wand.

## What is DNS?
Don’t be frightened, but I know what you’re thinking: _What is DNS?_

You see, the crystals are working.

DNS stands for domain name system.

DNS is commonly referred to as the phonebook of the internet. This means that, without DNS, humans would have a much more difficult time retrieving their desired webpages.

While we command our web browsers using domain names to determine which web files we’d like to interact with, our beloved web browsers don’t actually understand a word we’re typing. Web browsers operate via IP addresses, not domain names.

So, how do web browsers translate www.amazon.com to 205.251.242.103?
You guessed it, _magic!_ Oh, I mean DNS.

DNS is the translator between you and your browser. Each time you request a web domain in your browser—that’s not already stored in its cache—a process initiates via DNS to retrieve the IP address that corresponds to the entered domain name.

## How DNS Works
To provide an initial and grossly simplified illustration of this concept: picture you and a friend are in a retail store. In this scenario, the store is the internet and all of the products on the shelves are the web files.

Your friend needs help finding a chef knife. There is no signage stating “knives” or “kitchenware”, or any words for that matter. There are only numbers. You ask a store associate in which aisle the chef knives are located. The store associate states aisle seven, so you begin to head toward aisle seven while your friend remains waiting for you.

As you begin to near aisle seven, you notice that there are actually four aisle sevens: 7.1, 7.2, 7.3 and 7.4. You see the store manager and you ask her which aisle seven shelves chef knives. She tells you 7.3. You go to aisle 7.3, grab the chef knife your friend wants and head back to where your friend is waiting to give him the knife.

That is how DNS works in it’s most rudimentary form: through a series of inquiries.

To gain a more precise understanding of how DNS takes place in the digital world, we’ll first need to review some of DNS’ anatomical parts.

Before we do that, though, I’ll need to polish my Magic 8-Ball.

## DNS deconstructed
When requesting a webpage from your browser there are a few more inquiries that occur than what we demonstrated in our previous example.

To better understand each of these inqueries, you’ll need to understand the basic infrastructure that comprises DNS first.

**DNS recursor**: You can think of the recursor as your personal fetcher. As you provide a web domain query to your web browser, your web browser and operating system check to see if the corresponding IP address is  stored in their cache. If not, then the recursor is called upon for additional vetting. The recursor then proceeds to inquire more information from ancillary nameservers regarding the web domain’s IP whereabouts.

_Note: I’ve seen the term “recursor” substituted with “resolver,” which, for semantic purposes, I personally prefer using. From this point forward I will only be using the “resolver” verbiage._

**Root nameserver**: The root server is always the first step within our resolver’s inquiry journey. The root server won’t know the explicit IP address of our web domain, but informs us of the “zone” in which our domain is located (.com, .org, .net, etc). This zone information helps navigate our resolver to a more precise resource, the top level domain nameserver.

**TLD nameserver**:  Top level domain (TLD) nameservers are the zone omnisciences. These nameservers store records for all domains containing a specific extension (.com, .org, .net, etc). However, these TLD nameservers are not the authority source of these domains and do not render us our IP address. They do, however, lead us to our final destination: the authoritative nameserver.

**Authoritative nameserver**: The authoritative nameserver is usually our resolver’s final destination. These nameservers are the sheriffs in town that provide our resolver with the respective IP address matching our requested web domain.

Now that you’re familiar with all of DNS’ players, you’re ready for a step-by-step walkthrough of what occurs after typing in a web address and hitting “enter”.

## The DNS procedure
Warning: you are about to expose yourself to the inner workings of web surfing. The effects of this knowledge are permanent and ineradicable.

After this, there is no turning back. You take the blue pill—the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill—you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember: all I'm offering is the truth.

1. User types in “www.amazon.com” and presses “enter.”
2. Browser checks to see if the IP address for “www.amazon.com” is stored in cache. In this scenario, it is not. Browser panics, questions the meaning of life, but presses on and asks the operating system (OS) if it knows.
3. OS checks its backlogs. In this scenario, OS does not find anything. OS then calls upon the resolver for help.
4. The resolver checks its cache, but knows nothing, like Jon Snow. Resolver then prepares for its voyage and begins to set sail to the root nameserver.
5. Resolver asks the root nameserver if it knows the IP address for “www.amazon.com.” The root nameserver responds by saying “Alas, I do not. I do know where you can find more information regarding that .com top level domain, though. However, I have one condition: allow me access to your prime account.“ Resolver agrees to the terms, stores the information in its cache and sets sail once more to the .com TLD nameservers.
6. Resolver asks the top level domain nameserver if they know the IP address for “www.amazon.com.” Top level domain server responds by saying “I see ‘www.amazon.com’ within my records, but, unfortunately, I do not have the information you’re requesting. I can provide you with the authority nameserver of this domain, though.” Resolver thanks the TLD nameserver, stores the information within its cache and re-sets sail to its final destination.
7. Resolver asks the authority nameserver if it knows the IP address to “www.amazon.com.” Authority server responds by saying “I do! The IP address is 205.251.242.103. I also know that Jeff Bezos is one rich mother. . .“ Resolver rejoices, stores the IP address information in its cache and eagerly sets sail back to the OS.
8. Resolver lands at bay and provides OS with the IP address it requested. Resolver and OS high-five and OS stores the IP address in its cache.
9. OS then wakes up Browser, shouting the IP address at it.
10. Browser quickly throws on some pants and makes an HTTP request to the IP address.
11. The corresponding server then returns a copy of the requested web file and Browser renders the page.

## The wind down
By the look on your face I see my work is done here.

Learning these dark arts can be disconcerting initially, but, soon enough, you’ll learn to embrace its power. Now, pass me back my crystals and close your eyes as I stow away my Elder Wand and Magic 8 Ball.

Let me be the first to congratulate you. You’ve officially been indoctrinated in basic DNS witchcraft.

Remember, with great power comes great responsibility.

Happy hacking.