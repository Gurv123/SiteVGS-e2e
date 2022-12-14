-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 14, 2022 at 04:14 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vgs`
--

-- --------------------------------------------------------

--
-- Table structure for table `chapitre`
--

CREATE TABLE `chapitre` (
  `id` int NOT NULL,
  `projet` varchar(255) NOT NULL,
  `nb_chap` varchar(11) NOT NULL,
  `data_date` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chapitre`
--

INSERT INTO `chapitre` (`id`, `projet`, `nb_chap`, `data_date`) VALUES
(7, 'A Girl Like Alien', '35', '2022-12-07'),
(2, 'A Girl Like Alien', '35.5', '2022-12-07'),
(3, 'A Girl Like Alien', '35.6', '2022-12-07'),
(4, 'A Girl Like Alien', '35.4', '2022-12-07'),
(8, 'Break The World', '35.4', '2022-12-07');

-- --------------------------------------------------------

--
-- Table structure for table `commentaire`
--

CREATE TABLE `commentaire` (
  `id` int NOT NULL,
  `pseudo` varchar(250) NOT NULL,
  `commentaires` text NOT NULL,
  `projet` varchar(250) NOT NULL,
  `date_data` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mangas`
--

CREATE TABLE `mangas` (
  `id` int NOT NULL,
  `nom` text NOT NULL,
  `nom_alternatifs` text NOT NULL,
  `auteur` text NOT NULL,
  `artiste` text NOT NULL,
  `status` text NOT NULL,
  `annee` int NOT NULL,
  `genre` text CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `description` text NOT NULL,
  `nb_chap` int NOT NULL,
  `date_update` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mangas`
--

INSERT INTO `mangas` (`id`, `nom`, `nom_alternatifs`, `auteur`, `artiste`, `status`, `annee`, `genre`, `description`, `nb_chap`, `date_update`) VALUES
(1, 'Break The World', 'Break The World', 'Hudie Lan Man You Yinli', 'Man You Yinli', 'en cours', 2018, 'Action , Aventure , Fantastique , Arts Martiaux', 'Break the World est un MMORPG manhua. Nous suivons le voyage de Feng Xiao dans sa qu??te d\'essayer simplement d\'explorer le jeu. Mais il doit faire face ???? tous les probl??mes suppl??mentaires qui accompagnent la lecture d\'un jeu vid??o en premi??re. Le jeu fonctionnera-t-il jamais ? D??couvrez-le dans Break The World.', 4, '2021-09-04'),
(2, 'Cross Days', 'Cross Days', 'SAKAZUKI Homare', 'SAKAZUKI Homare', 'en cours', 2018, 'Drame , Harem , Psychologique , Romance , Vie Scolaire', 'Yuuuki Ashikaga est un ??tudiant de premi??re ann??e du secondaire ?? son deuxi??me semestre ?? l\'Acad??mie Sakakakino. Apr??s ses visites r??guli??res ?? la biblioth??que de l\'??cole, il est tomb?? amoureux de Kotonoha Katsura, un camarade de classe venu pour la lecture. Bien qu\'elle ait d??j?? un petit ami, elle partage v??ritablement ses int??r??ts. Cependant, les choses se se compliquent lorsque, ?? la suite d\'une br??ve rencontre, sa soeur, Chie Ashikaga, lui pr??sente Roka Kitsuregawa, une connaissance qui lui aussi en raffole. Par rancune jalouse pour sa rivale, Roka tente de dissuader Yuuuki en affirmant aimer Makoto Itou, un autre camarade de classe. Son mensonge se retourne de fa??on dramatique, alors que Yuuuki, conscient du fait que Makoto est le petit ami de Kotonoha, va lui poser des questions sur cette affaire. Remarque : Cross Days se situe au milieu du sc??nario initial de School Days et fournit une autre version de la fa??on dont les choses auraient pu se d??rouler.', 7, '2020-02-12'),
(3, 'Demon King in Distress', 'Demon King in Distress', 'Enda Marimo', 'Enda Marimo', 'en cours', 2018, 'Aventure , Com??die , Ecchi , Surnaturel', 'Le diable qui a perdu son pouvoir magique dans la lutte contre les anges longs accomplit le principe d\'absorber l\'??me humaine et de restaurer son pouvoir ! C\'??tait un roi d??moniaque qui voyageait dans le monde humain avec quatre rois c??lestes en qui j\'avais confiance, mais la destination que j\'atteignis ??tait une ??le solitaire de l\'oc??an... ! Sur cette ??le o?? la magie ne peut pas ??tre utilis??e, une survie qui peut rire ?? l\'envers avec la tristesse des souverains et des subordonn??s dans le Makai commence !', 6, '2020-02-12'),
(4, 'Denpa Kyoushi', 'Denpa Kyoushi', 'AZUMA Takeshi', 'AZUMA Takeshi', 'en cours', 2011, 'Com??die , Harem , Romance', 'Kagami Junichirou est connu comme ??tant un Physicien de G??nie. Il ??crit une th??se malgr?? son jeune ??ge qui est de 17 ans et il a ??t?? m??me ??t?? publi?? par\'la Nature\' un magazine de science connu. Apr??s l\'universit??, il s\'est consacr?? ?? ??tre un Otaku et un NEET. Il met ?? jour son Blog d\'Anime,visant la premi??re place . Il pr??tend avoir une maladie qui lui fait faire SEULEMENT ce qu\'il veut faire. D??sesp??r?? qu\'il ne fasse rien de sa vie, sa petite soeur r??ussit ?? lui obtenir un travail comme professeur ?? l\'universit?? ou il a ??tudi??.', 15, '2021-03-14'),
(5, 'Drawing While Masturbating', 'Drawing While Masturbating', 'IGARASHI Yui', 'IGARASHI Yui', 'en cours', 2018, 'Com??die , Ecchi , Romance , Seinen , Adulte', 'Ashida Mamoru est une assistante manga divin, mais son habitude de devenir paresseuse l\'a laiss?? sans travail. Heureusement, l\'un de ses camarades de classe de l\'universit?? a une petite s??ur qui est un auteur de manga en s??rie et qui a besoin d\'un assistant.', 9, '2021-03-06'),
(6, 'Hachinan tte, Sore Wa Nai Deshou!', 'Hachinan tte, Sore Wa Nai Deshou!', 'Y.A', 'Kusumoto Hiroki', 'en cours', 2017, 'Action , Aventure , Com??die , Drame , Fantastique , Harem , Romance , Shonen', 'Shingo Ichinomiya, un jeune homme de 25 ans travaillant dans une grande entreprise, s\'endort encore une fois, en pensant ?? sa journ??e remplie du lendemain. Cependant, en se r??veillant, il se trouve dans une chambre qu\'il ne reconna??t pas et r??alise qu\'il est dans le corps d\'un jeune gar??on de 6 ans. Il va rapidement d??couvrir qu\'il fait partie d\'une famille pauvre, vivant dans un village recul??.', 17, '2020-02-12'),
(7, 'Happy Sugar Life', 'Happy Sugar Life', 'Kagisora Tomiyaki', 'Kagisora Tomiyaki', 'en cours', 2015, 'Drame , Horreur , Myst??re , Vie Scolaire , Shonen', 'La lyc??enne Matsuzaka Sato a la r??putation d\'??tre facile, mais un jour sa vie de coucher avec un gar??on apr??s l\'autre prend fin. Cela se produit lorsqu\'elle rencontre l\'enfant Shio, pour qui elle est convaincue de ressentir un v??ritable amour pour la premi??re fois. Sato peut sembler douce et innocente, mais elle ne fera rien pour prot??ger leur vie ensemble, m??me pour commettre un meurtre. Mais d\'o?? a-t-elle acquis la petite fille et combien de temps peuvent durer leur \"Happy Sugar Life\"?', 4, '2020-12-06'),
(8, 'Honkai Impact 3rd - 2nd Lawman', 'Honkai Impact 3rd - 2nd Lawman', 'MiHoYo', 'MiHoYo, Ego', 'en cours', 2018, 'Action , Drame , Mecha , Sci-fi , Webtoon', '363/5000 \"Le 1er f??vrier 2001. Tout le personnel de recherche de l\'installation de Shicksals Babylon en Sib??rie a disparu du jour au lendemain. Tandis que Theresa enqu??te sur ce myst??re sous les ordres d\'Otto, Walter et Einstein se pr??parent ?? sa comparution. La table est pr??te pour le deuxi??me Impact de Honkai. \" Chronologie : 14 ans avant le d??but de la partie. L\'arc est toujours en cours.', 11, '2020-02-12'),
(9, 'Jaryuu Tensei', 'Jaryuu Tensei', 'SETO Meguru', 'HASHIMOTO Yuushi', 'en cours', 2016, 'Action , Aventure , Com??die , Harem , Romance , Vie Scolaire', 'L\'histoire raconte l\'histoire d\'un gars d??c??d?? des suites d\'un accident de voiture ?? cause d\'un jeune couple en train de s\'embrasser (quelle malchance !). Et il s\'est r??incarn?? dans un monde fantastique - mais sous la forme d\'un dragon ! Un extr??mement puissant ? Voyons commenter \"notre\" personnage principal vit comme un dragon !', 11, '2020-02-12'),
(10, 'Karate Baka Isekai', 'Karate Baka Isekai', 'Terui Eito', 'buun150', 'en cours', 2019, 'Action , Fantastique , Isekai', 'Un pratiquant de karat?? qui a ??t?? transf??r?? dans un autre monde refuse les techniques de triche donn??es par la d??esse et poursuit son propre karat?? dans un autre monde.', 5, '2021-08-31'),
(11, 'Kitaku Tochuu de Yome to Musume ga dekita n dakedo, Dragon datta', 'Kitaku Tochuu de Yome to Musume ga dekita n dakedo, Dragon datta', 'FUKAKUTEI Waon', 'AMANO Kohitsuji', 'en cours', 2018, 'Com??die , Fantastique , Romance , Seinen , Tranche de vie', 'Un pratiquant de karat?? qui a ??t?? transf??r?? dans un autre monde refuse les techniques de triche donn??es par la d??esse et poursuit son propre karat?? dans un autre monde.', 5, '2020-02-12'),
(12, 'KoLD8 King of the Living Dead', 'KoLD8 King of the Living Dead', 'Pageratta', 'Pageratta', 'en cours', 2018, 'Horreur , Shonen', 'Les zombies ont occup?? le Japon en seulement un mois. Pour ??viter d\'??tre infect?? par des zombies, Eito Hasaba, avec sa m??re et sa s??ur cadette, se dirigent vers un \"secteur\", une zone de s??curit?? bloqu??e. Mais peu apr??s leur arriv??e, Eito se blesse gravement lors d\'un d??saccord et est expuls?? du secteur. Avec sa conscience faiblissante, Eito voit une meute de zombies arriver et se r??signe ?? son sort. Mais que d??couvre-t-il ?? son r??veil ? L\'histoire d\'un anti-h??ros mort-vivant commence.', 2, '2020-12-06'),
(13, 'Kouritsu Kuriya Madoushi, Daini no Jinsei de Madou o Kiwameru', 'Kouritsu Kuriya Madoushi, Daini no Jinsei de Madou o Kiwameru', 'Kenkyo na Circle', 'ASAKAWA Keiji', 'en cours', 2015, 'Action , Aventure , Com??die , Fantastique , Harem , Romance', 'Zeff Einstein ?? passer sa vie ?? ma??triser la magie rouge et a finalement ??t?? reconnu pour ??a. N??anmoins, un sort nouvellement cr???? r??v??la que son talent pour la magie rouge ??tait le plus bas. Am??re ?? la pens??e d\'avoir gaspill?? son temps, Zeff cr??a un sort afin de voyager dans le temps dans le but de rencontrer sa version plus jeune. Accompagn?? du mage Milly et de l\'??p??iste Claude, il a bien l\'intention de ma??triser la magie de mani??re plus efficace cette fois-ci.', 19, '2020-02-12'),
(14, 'Magi Craft Meister', 'Magi Craft Meister', 'Aki Gitsune', 'Aki Gitsune', 'en cours', 2016, 'Action , Aventure , Fantastique , Harem , Romance , Sci-fi , Shonen , Tranche de vie , Surnaturel', 'Il n\'y a qu\'un seul Magi Craft Meister au monde. ?? la mort du dernier Meister, Jin Nidou des centaines d\'ann??es plus tard f??t transport?? dans un autre monde enfin de lui succ??der et d\'accomplir sa volont??. Apr??s avoir obtenu les connaissances des Magi Craft Meister, Jin tente d\'utiliser un portail de t??l??portation d??fectueux, ce qui le t??l??porta dans un monde inconnu. En plus de cela, une automate qu\'il a r??cemment restaur?? utilise aussi le t??l??porteur dans le but de trouver son \"p??re\". Ainsi, commencez l\'aventure du nouveau Magi Craft Meister !', 24, '2020-02-12'),
(15, 'Maou no Hajimekata', 'Maou no Hajimekata', 'WARAU Yakan', 'KOMIYA Toshimasa', 'en cours', 2015, 'Action , Aventure , Drame , Fantastique , Harem , Mature , Seinen , Surnaturel , Adulte', 'Apr??s avoir consacr?? sa vie ?? la recherche sur les arcanes, Aur a finalement d??couvert les secrets pour devenir un Roi D??mon. Utilisant son nouveau pouvoir pour invoquer une sublime succube, Lilu, Aur commence ?? bat??r une s??rie vertigineuse de halls semblables ?? un labyrinthe qui deviendra sa forteresse. Ainsi commence la sombre aventure fantastique d\'un Roi D??mon ?? la conqu??te du monde humain en qui il n\'a jamais eu confiance !', 13, '2020-02-12'),
(16, 'Nano Hazard', 'Nano Hazard', 'Kurihara Shoushou', 'Kazaana', 'en cours', 2018, 'Action , Shonen , Tranche de vie', 'Le r??ve d\'Enjou Shuuto a toujours ??t?? de devenir d??tective et d\'??liminer la raclure qui avait tu?? son p??re. En pratique, il affronte les brutes locales ?? chaque occasion afin de se faire la main. Mais que se passe-t-il lorsque des nanobots voyous descendent dans son quartier, boostant les capacit??s de leurs h??tes ?', 8, '2020-02-12'),
(17, 'Nozomi x Kimio', 'Nozomi x Kimio', 'HONNA Wakou', 'HONNA Wakou', 'en cours', 2011, 'Com??die , Ecchi , Romance , Shonen , Tranche de vie', 'Suga Kimio se retrouve cach?? dans les vestiaires des filles, incapable de bouger ou de fuir. Komine Nozomi, une des filles de sa classe le trouve en ouvrant son casier. A sa grande surprise, Nozomi referme aussit??t son casier et attend que toutes les filles s???en aillent afin de laisser Kimio repartir. Plus tard, cette nuit-l??, il re??oit un message de Nozomi habitant dans le m??me immeuble que lui. Celle-ci le fait chanter et le persuade de se ?? d??voiler mutuellement ?? sous couvert de ruiner sa vie scolaire. Pour les deux, commence alors un ?? peep-show ?? au travers de leurs fen??tres???', 33, '2020-02-12'),
(18, 'Shame Application', 'Shame Application', 'Fujoking', 'Fujoking', 'en cours', 2019, 'Ecchi , Josei , Romance , Yaoi', 'Un mannequin c??l??bre et un ancien camarade de classe du lyc??e seront li??s par une application qui les obligerait ?? ob??ir, se faisant humilier. Qu\'attendriez-vous d\'une application qui a sa propre \"vie\"? Comment vont-ils assumer cette humiliation? L\'avertissement n\'??tait pas suffisant! L\'oeuvre va ??tre sortie sous peu pour le premier chapitre il est en court d\'??dition merci de patient??', 9, '2020-02-12'),
(19, 'Sweet Candy', 'Sweet Candy', '??', '??', 'en cours', 2018, 'Com??die , Romance , Webtoon', 'Li Xiao Guo est une nouvelle infirmi??re de l\'h??pital Jiayu. Sa vie prend une tournure dramatique quand une s??rie d\'incidents malheureux se produisent. Ses parents se font arnaquer avec leurs ??conomies, sa famille est de plus en plus endett??e, son t??l??phone est vol?? et le travail de Xiao Guo est menac??. D??sesp??r??e, Xiao Guo essaie de vendre son sang pour de l\'argent rapidement. En m??me temps, un patient sp??cial est admis ?? l\'h??pital et le monde de Xiao Guo est boulevers??. Il devient vite ??vident que Xiao Guo et ce nouveau patient sont li??s par plus d\'une simple co??ncidence ....', 23, '2020-02-12'),
(21, 'World Teacher - Isekaishiki Kyouiku Agent', 'World Teacher - Isekaishiki Kyouiku Agent', 'NEKO Kouichi', 'YOSHINO Sora', 'en cours', 2018, 'Action , Aventure , Com??die , Drame , Fantastique , Harem , Romance , Vie Scolaire\r\n\r\n', 'Un homme qui ??tait autre fois appel?? l\'agent le plus puissant du monde a fini par devenir enseignant apr??s sa retraite, pour former une nouvelle g??n??ration d\'agents. Apr??s de nombreuses ann??es d\'entra??nement de ses disciples, il a ??t?? tu?? ?? l\'??ge de 60 ans par une organisation secr??te et s\'est r??incarn?? dans un autre monde, ses souvenirs ??tant intacts. Bien qu\'il ait ??t?? surpris par l\'existence de la magie et des esp??ces ??tranges de ce monde, il s\'est rapidement adapt?? ?? sa condition de nouveau-n?? et en a profit??. Il a acquis une magie sp??ciale et acquis une force consid??rable gr??ce ?? sa discipline rigoureuse afin d\'atteindre son objectif: reprendre sa carri??re d\'enseignant qu\'il a quitt?? ?? mi-parcours dans sa vie ant??rieure. C???est l???histoire d???un homme qui, s???appuyant sur les souvenirs et les exp??riences de sa vie ant??rieure, est devenu un enseignant qui parcourt le monde avec ses ??l??ves. Adaptation du lite novel.', 17, '2020-02-12'),
(22, 'A Girl Like Alien', 'A Girl Like Alien', 'Nebillim', 'Nebillim', 'en pause', 2020, 'Com??die , Tranche de vie', 'Gil Cho-Rong avait soudainement chang?? apr??s les vacances d\'??t?? en troisi??me ann??e de coll??ge. Ses cheveux avaient ??t?? teints en vert ...', 4, '2022-12-07'),
(23, 'Free Life Isekai Nandemoya Funtouki', 'Free Life Isekai Nandemoya Funtouki', 'Kigatsukeba Kedama', 'Mori Airi', 'en pause', 2018, 'Action , Aventure , Com??die , Drame , Fantastique , Harem , Seinen', 'Sayama Takahiro, un lyc??en insouciant, a ??t?? transport?? dans un monde fantastique identique ?? celui d\'un certain jeu VR. Son attitude de \" go-with-the-flow \" a fini par l\'emporter sur son d??sir de rentrer chez lui, et maintenant il dirige \" Free Life \", une petite entreprise qui se consacre ?? r??pondre aux demandes de ses clients. Avec l\'aide de Yumiel, quel genre de travail Sayama finira-t-il par faire ?', 4, '2020-12-06'),
(24, 'Isekai Maou To Shoukan Shoujo Dorei Majutsu', 'Isekai Maou To Shoukan Shoujo Dorei Majutsu', 'MURASAKI Yukiya', 'FUKUDA Naoto', 'en pause', 2015, 'Action , Aventure , Com??die , Fantastique , Harem , Romance , Shonen , Isekai', 'Sakamoto Takuma se vante d\'avoir une force exceptionnelle qui lui est suffisante pour ??tre appel?? le \"Roi D??mon\" par les autres joueurs. Un jour, il est invoqu?? dans un autre monde avec la m??me apparence que dans le jeu. L??-bas se trouvent deux personne se d??clarant ??tre \"le vrai ma??tre invocateur\". Takuma fut r??duit en esclavage magique d?? ?? un sort lanc?? par les deux filles. Cependant, l\'habilit?? {Magic Reflection} a ??t?? invoqu??e ! Ceux r??duit ?? l\'??tat d\'esclave sont maintenant les filles ! Takuma est d??sorient??. Il est le plus puissant magicien mais, il ne poss??de aucun talent pour communiquer. Paniqu??, les premiers mots qui sortent de sa bouche sont ceux qu\'il utilis?? dans le jeu o?? il jouait le r??le de Roi D??mon ! ? \"Je suis incroyable vous dites ? Bien s??r que je le suis. Je suis Diablo.................. Celui craint sous le nom de Roi D??mon !\" Ceci est l\'histoire du (faux) Roi D??mon qui inspirera bient??t le monde et de ses autres aventures ?? travers le monde dans lesquels il plonge??t avec son immense pouvoir, que l\'histoire d??bute.', 18, '2020-02-12'),
(25, 'Universe And Sword', 'Universe And Sword', 'SIN', 'SIN', 'en pause', 2019, 'Action , Aventure , Fantastique , Vie Scolaire , Sci-fi , Surnaturel , Webtoon', 'Un jeune gar??on qui veut devenir un h??ros, Wuju, rencontre un jour le vrai h??ros qu\'il admire ? Le jeune gar??on qui voulait devenir un h??ros, Wuju, devint ?? la place l\'??p??e du h??ros.', 6, '2021-03-13'),
(26, 'Stresser', 'Stresser', 'JIXKSEE', 'JIXKSEE', 'en pause', 2019, 'Action , Drame , Surnaturel , Webtoon', 'Histoire de personnes atteintes du syndrome de stress excessif et de l\'??quipe DS qui tentent de les sauver, et de la fille du secondaire, Lee Hagyung.', 6, '2020-02-12'),
(27, 'Kantai Collection -KanColle- KanColle Manga (Doujinshi)', 'Kantai Collection -KanColle- KanColle Manga (Doujinshi)', 'Funny Rocket (Circle) , Nichika', 'Funny Rocket (Circle) , Nichika', 'termines', 2019, 'Com??die , Drame , Shojo Ai , Tranche de vie , Yuri', 'Les m??saventures des cuirass??s incarnent les petites filles de la s??rie Kantai Collection.', 3, '2020-12-06'),
(28, 'Kimetsu No Aima!', 'Kimetsu No Aima!', 'Funny Rocket (Circle) , Nichika', 'Funny Rocket (Circle) , Nichika', 'termines', 2019, 'Action , Aventure , Com??die , Drame , Historique , Arts Martiaux , Shonen , Surnaturel', 'Un manga gag manga manga manga ?? quatre panneaux d??riv?? du manga Kimetsu no Yaiba. Le manga pr??sentera des versions SD des personnages du manga principal. Et il sortira apr??s la premi??re de chaque ??pisode de l\'anime, avec des histoires couvertes par l\'anime. Liens Webcomic original', 5, '2020-02-12'),
(29, 'Five Senses', 'Five Senses', 'Momoko Suika', 'Momoko Suika', 'termines', 2017, 'Romance , Tranche de vie , Yaoi', 'Sumi Keisuke vit comme professeur dans une universit?? et est attir??e par un ??tudiant, Shiromoto Kotarou, qui devient rapidement sa nouvelle muse. Keisuke finit par d??sirer le gar??on avec obsession, se cramponnant ?? lui avec ses cinq sens.', 7, '2020-02-12'),
(35, 'Love Live! - Taiiku Souko de Futarikiri ni Naru Omajinai in MakiPana (Doujinshi)', 'Love Live! dj - A Charm to be All Alone in the Gym Storage in MakiPana ?????! dj - ????????????????? in???? ????????????????? in????', 'Siva', 'Siva', 'termines', 2020, 'Com??die, One shot, Romance, Yuri', ' ', 1, '2020-12-06');

-- --------------------------------------------------------

--
-- Table structure for table `membres`
--

CREATE TABLE `membres` (
  `id` int NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `motdepasse` text NOT NULL,
  `birthdate` date NOT NULL,
  `admin` int NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `membres`
--

INSERT INTO `membres` (`id`, `pseudo`, `mail`, `motdepasse`, `birthdate`, `admin`) VALUES
(1, 'Volpe', 'volpgangscantrad@gmail.com', '03d87cf10d18efb61eeceec718a6bca0', '2001-01-08', 0),
(2, 'Karao', 'liamvaganay61@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '2001-08-18', 0),
(6, 'araao', 'fdzdragon82@gmail.com', '03d87cf10d18efb61eeceec718a6bca0', '2000-01-01', 0),
(7, 'Nolvshy', 'yukilovewaifu@gmail.com', '906e047e09378b875ea96799f23fc36d', '2000-10-06', 0),
(8, 'Volpe08', 'f.rivetdurzy@gmail.com', 'a34ddc352aa9a504e0b14d3bb85773b1', '2001-01-01', 1),
(9, 'testAdmin', 'testAdmin@gmail.com', '05a671c66aefea124cc08b76ea6d30bb', '2002-02-13', 1),
(10, 'testUser', 'testUser@gmail.com', '05a671c66aefea124cc08b76ea6d30bb', '2002-02-14', 0),
(11, 'userTest', 'user@gmail.com', '05a671c66aefea124cc08b76ea6d30bb', '2002-01-01', 0);

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int NOT NULL,
  `pseudo` text CHARACTER SET utf8mb3 COLLATE utf8mb3_swedish_ci NOT NULL,
  `role` text NOT NULL,
  `grade` text NOT NULL,
  `Admin` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `pseudo`, `role`, `grade`, `Admin`) VALUES
(2, 'Meless', 'Trad, Edit en formation, Check', 'Cheffe Check', 1),
(22, 'Volpe', 'edit, clean, coloriste, Leader', 'Leader', 1),
(23, 'Ahily', 'Clean', 'Cheffe Clean', 1),
(7, 'Gags', 'trad, edit', 'Chef Trad', 1),
(8, 'Lisachat', 'edit', 'Cheffe Edit', 1),
(9, 'Lovenyu', 'trad, edit, check', 'Sous-chef Check', 1),
(10, 'Marion', 'trad', 'Sous-chef Trad', 1),
(11, 'Fanthom', 'trad', '', 0),
(17, 'Robin', 'coloriste', '', 0),
(18, 'Jared', 'trad, check', '', 0),
(26, 'Nolvshy', 'Coloriste', 'Chef Coloriste', 1),
(21, 'Karao', 'D??veloppeur', 'D??veloppeur', 1),
(27, 'Volpe08', 'edit, clean, coloriste, Leader', 'Leader', 1),
(28, 'testAdmin', 'edit, clean, coloriste, Leader', 'test', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chapitre`
--
ALTER TABLE `chapitre`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `commentaire`
--
ALTER TABLE `commentaire`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mangas`
--
ALTER TABLE `mangas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `membres`
--
ALTER TABLE `membres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chapitre`
--
ALTER TABLE `chapitre`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `commentaire`
--
ALTER TABLE `commentaire`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `mangas`
--
ALTER TABLE `mangas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `membres`
--
ALTER TABLE `membres`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
