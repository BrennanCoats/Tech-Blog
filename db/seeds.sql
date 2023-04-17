INSERT INTO user (username, email, password)
VALUES ("billybobjr", "bill@test.com", "password"),
       ("teddybear", "ted@test.com", "password"),
       ("bobbythegreat", "bob@test.com", "password"),
       ("jimothyhalpert", "jim@test.com", "password"),
       ("hankfromdea", "hank@test.com", "password"),
       ("johnnynoplay", "john@test.com", "password");

INSERT INTO post (title, content, users_id)
VALUES ("Hello", "What's up everybody!", 001),
       ("Its my birthday", "Happy Birthday to me!", 002),
       ("Help!", "Somebody help theres a snake in my toilet!", 003),
       ("I graduated", "I finally graduated Highschool!", 004),
       ("I like cheese", "Cheese is a delicious treat", 005),
       ("I'm buying a car", "What kind of car should I buy?", 006);

INSERT INTO comment (content, date_created, user_id, post_id)
VALUES ("Happy Birthday!!!", "2023-04-11", 002, 002),
       ("Hey dude!", "2023-04-11", 001, 001),
       ("Congratulations!", "2023-04-11", 003, 004),
       ("How did a snake get in there?!", "2023-04-11", 004, 003),
       ("You should buy a mustang", "2023-04-11", 005, 006),
       ("Cheese really great fr", "2023-04-11", 006, 005);
