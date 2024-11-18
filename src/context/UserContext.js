// src/context/UserContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { language } = useContext(LanguageContext);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = {
      en: {
        name: "Mariusz Gawron",
        jobTitle: "JavaScript Developer",
        about:
          "I'm a 35-year-old web developer who isn't afraid of challenges. For several years, I've been involved in the planning, testing, and development of applications that streamline logistics operations in a large production and logistics company. My experience includes both IT project development and team coordination, but what drives me the most recently is solving real-world problems with code. \n\nAs an Application Development Specialist, I develop tools that improve internal company processes, from ordering systems to applications for optimizing transportation, as well as creating an application for submitting transportation requests for the company's logistics department. I handle the full application lifecycle: from planning and development, through testing, deployment, and providing technical support. \n\nIn addition to coding, I continuously grow by participating in courses related to JavaScript, Oracle APEX, and Power BI. I treat every project as a new challenge and an opportunity to learn, because I believe that constant development is the key to innovative solutions.",
        experience: [
          {
            title: "Application Development Specialist - Logistics Department",
            company: "CORRECT - K. Błaszczyk i Wspólnicy Sp. K.",
            years: "01.2024-present",
            description:
              "- Developing an internal transport request application for the company (EVAN) - HTML, JS, PHP, PL/SQL. \n- Testing, configuration, and providing technical support in the creation of customer order planning software, powered by various communication channels - EDI, FTP, WEB. \n- Collaboration and technical support with an external developer team in creating a portal for transport registration and notifications, information exchange with external and internal clients. \n- Providing technical support for internal programs (Vehicle Movement, ABC, Hermes) and APIs for internal company needs - IIS.",
          },
          {
            title: "Project Manager - Logistics Department",
            company: "CORRECT - K. Błaszczyk i Wspólnicy Sp. K.",
            years: "08.2023-12.2023",
            description:
              "- Providing technical support to the logistics and transport coordinators. \n- Developing, testing, and maintaining current applications. \n- Developing an application for optimizing cargo loading - HTML, JS, PHP.",
          },
          {
            title: "Logistics Coordinator - Logistics Department",
            company: "CORRECT - K. Błaszczyk i Wspólnicy Sp. K.",
            years: "04.2019-07.2023",
            description:
              "- Coordinating logistics and transport operations. \n- Optimizing processes and implementing improvements. \n- Analyzing and monitoring order fulfillment according to established economic and logistical indicators. \n- Providing necessary information to the company's strategic clients in areas of ongoing cooperation. \n- Preparing, analyzing, and distributing specific logistics reports. \n- Configuring, managing, developing, and testing the logistics system. \n- Overseeing the proper exchange of data between IT systems - EDI, FTP, WEB. \n- Monthly evaluation of 30 employees. \n- Creating and overseeing departmental procedures and instructions.",
          },
          {
            title: "Logistics Specialist - Logistics Department",
            company: "CORRECT - K. Błaszczyk i Wspólnicy Sp. K.",
            years: "06.2018-03.2019",
            description: "- Planning the loading of current customer orders. \n- Reporting and contacting clients and cooperating departments.",
          },
          {
            title: "Junior Logistics Specialist - Logistics Department",
            company: "CORRECT - K. Błaszczyk i Wspólnicy Sp. K.",
            years: "02.2017 - 05.2018",
            description: "- Planning the loading of current customer orders.",
          },
          // {
          //   title: "Transport Service Representative - Transport Service Department",
          //   company: "CORRECT - K. Błaszczyk i Wspólnicy Sp. K.",
          //   years: "02.2016-02.2017",
          //   description: "- Preparing transport documentation for truck drivers, customs agencies, and accounting after loading.",
          // },
          // {
          //   title: "Maintenance Technician",
          //   company: "CORRECT - K. Błaszczyk i Wspólnicy Sp. K.",
          //   years: "02.2015-01.2016",
          //   description: "- Repairing, overhauling, and maintaining machines used for spring and foam mattress production.",
          // },
          // {
          //   title: "Refrigeration Plant Operator",
          //   company: "P.P.H.U. Alces – Chłodnia składowa",
          //   years: "06.2014-01.2015",
          //   description: "- Operating, monitoring, and maintaining the refrigeration plant.",
          // },
          // {
          //   title: "Own Business",
          //   company: "Online Store",
          //   years: "12.2013-07.2014 ",
          //   description: "- Running an online store built on PrestaShop.",
          // },
          // {
          //   title: "Refrigeration Installation Technician",
          //   company: "Tech Mors. Zakład techniki chłodniczej. Żuk D.",
          //   years: "01.2013-10.2013",
          //   description: "- Creating, repairing, and maintaining refrigeration installations.",
          // },
          // {
          //   title: "Refrigeration Equipment Mechanic",
          //   company: "Grupa Producentów Owoców i Warzyw „Family Farm” Sp. z o.o.",
          //   years: "12.2011-12.2012",
          //   description: "- Operating, monitoring, and maintaining the refrigeration plant.",
          // },
          // {
          //   title: "Refrigeration Plant Operator",
          //   company: "Calfrost Sp. z o.o.",
          //   years: "08.2010-11.2011",
          //   description: "- Operating, monitoring, and maintaining the refrigeration plant.",
          // },
          // {
          //   title: "Refrigeration Plant Operator Assistant",
          //   company: "P.P.H.U. Alces – Chłodnia składowa",
          //   years: "11.2009-07.2010",
          //   description: "- Assisting in operating the refrigeration plant.",
          // },
          // {
          //   title: "Sales Representative – Customer Advisor",
          //   company: "Telewizja Nowej Generacji „n”",
          //   years: "09.2008-06.2009",
          //   description: "- Advising and selling television services.",
          // },
          // {
          //   title: "Warehouse Worker - Seasonal Work",
          //   company: "Przedsiębiorstwo Produkcji Lodów „Koral”",
          //   years: "06.2008-09.2008",
          //   description: "- Preparing goods for orders.",
          // },
        ],
        education: [
          {
            course: "SQL for intermediate level",
            school: "JSystems Sp. z o.o.",
            years: "11.2024",
            description: "Writing queries based on more than one table, modifying data based on other tables, restoring saved changes.",
            certificate: "/img/SQL2.pdf",
            certificateThumbnail: "/img/SQL2.jpg",
          },
          {
            course: "Oracle SQL Basics - Course",
            school: "JSystems Sp. z o.o.",
            years: "10.2024",
            description:
              "Using basic development tools, querying databases to retrieve data, creating complex reports based on data, creating and managing objects necessary to store data, modifying, adding, and deleting data in a way that is safe for data integrity.",
            certificate: "/img/SQL.pdf",
            certificateThumbnail: "/img/SQL.jpg",
          },
          {
            course: "JavaScript Developer - Course",
            school: "Coders Lab",
            years: "10.2023 - 08.2024",
            description:
              "Course content: advanced HTML and CSS, SASS and RWD, JavaScript, ECMAScript 6, React, project work, advanced state management, testing, Docker. The course included 500 hours of lectures, practical sessions with an instructor, and self-study.",
            certificate: "/img/JavaScript.pdf",
            certificateThumbnail: "/img/JavaScript.jpg",
          },
          {
            course: "Oracle APEX - Course",
            school: "DBE Andrzej Nowakowski",
            years: "11.2023",
            description: "Oracle APEX training in the creation and administration of applications using Oracle Application Express technology.",
            certificate: "/img/Apex.pdf",
            certificateThumbnail: "/img/Apex.jpg",
          },
          {
            course: "Power BI + SQL - Course",
            school: "JSystems Sp. z o.o.",
            years: "09.2021",
            description:
              "Working with multi-table models, Power Query for Power BI Desktop, advanced visual elements, sharing Power BI Desktop reports, basics of SQL in Power BI, and stages of data processing in Power BI.",
            certificate: "/img/Power BI + SQL.pdf",
            certificateThumbnail: "/img/Power BI + SQL.jpg",
          },
          {
            course: "Web and Mobile Applications - Postgraduate Studies",
            school: "Wyższa Szkoła Bankowa w Poznaniu",
            years: "10.2017 - 06.2018",
            description:
              "Creating responsive websites and web applications based on HTML5/CSS3, Ajax, PHP, Javascript, ASP.NET, creating native mobile applications in Java and .NET, using development environments for Android systems.",
            certificate: "",
            certificateThumbnail: "",
          },
          {
            course: "Environmental Engineering - Engineering Studies",
            school: "Państwowa Wyższa Szkoła Zawodowa w Kaliszu",
            years: "10.2011 - 05.2014",
            description: "",
            certificate: "",
            certificateThumbnail: "",
          },
        ],
        hardSkills: [
          { name: "JavaScript", level: 3 },
          { name: "PHP", level: 3 },
          { name: "JAVA", level: 1 },
          { name: "React", level: 2 },
          { name: "APEX", level: 1 },
          { name: "CSS", level: 3 },
          { name: "SASS", level: 1 },
          { name: "PL/SQL", level: 1 },
          { name: "HTML", level: 3 },
        ],
        softSkills: [
          { name: "Commitment" },
          { name: "Critical Thinking" },
          { name: "Adaptability" },
          { name: "Communication Skills" },
          { name: "Analytical Thinking" },
          { name: "English - B2" },
        ],
        softwareSkills: [
          { name: "Excel", level: 5 },
          { name: "Word, PowerPoint", level: 4 },
          { name: "Power BI", level: 3 },
          { name: "Power Automate", level: 3 },
          { name: "VSC", level: 4 },
          { name: "ASANA", level: 4 },
          { name: "TRELLO", level: 3 },
          { name: "GIT", level: 3 },
          { name: "ZABBIX", level: 3 },
          { name: "IIS", level: 2 },
        ],
        projects: [
          {
            name: "Game of life",
            technology: "React",
            link: "https://mg-gameoflife.netlify.app/",
            thumbnail: "/img/GameOfLife.jpg",
            github: "https://github.com/MariuszGawron/game-of-life",
            description:
              "Game of Life - an application created in React. The game is well-documented online, but in my version, I added the ability to modify the game's rules, specifically the conditions under which a cell becomes dead or alive and when it is born. I also implemented options to change the simulation speed, the size of the grid, and the size of individual cells. Additionally, users can change the colors of the cells that have survived for a certain number of cycles. I also implemented several interesting combinations of rules that lead to the emergence of unique patterns.",
          },
          {
            name: "Oddam za darmo",
            technology: "React",
            link: "https://mg-oddam.netlify.app/",
            thumbnail: "/img/Oddam.jpg",
            github: "https://github.com/MariuszGawron/oddam_w_dobre_rece",
            description: "The website was created for the purpose of the JS Developer course.",
          },
          {
            name: "CV",
            technology: "React",
            link: "/img/CV-Mariusz-Gawron.pdf",
            thumbnail: "/img/CV.jpg",
            github: "https://github.com/MariuszGawron/my-cv",
            description: "This is the very page you are on right now ;-)",
          },
          {
            name: "eVan",
            technology: "JS, PHP",
            link: "photo.html",
            thumbnail: "/img/eVan1.jpg",
            github: "",
            description:
              "The website was created for the logistics needs of a large manufacturing and logistics company. It allows employees to create transport requests (road, sea, rail, air, and courier transport). For each request, loading and unloading locations can be added, specifying exact dates and additional requirements such as ADR and delivery conditions. Invoices for goods, transport invoices, and project costs can be assigned to each request. The application supports users submitting requests, users accepting requests, and users configuring and parameterizing the application's operation. The behavior of the application mainly relies on parameters. User access is defined at the role level, and the naming conventions, behavior of forms, and visibility of buttons are based on parameters defined by the application's administrator.",
          },
        ],
        interests: [
          {
            name: "Post-apocalyptic, horros, fantasy books",
            description:
              "A. Rogoziński, R. Szmidt - Szczury Wrocławia series, Uniwersum Metro, D. Glukhovsky - Metro 2033 series, S. King, G. R.R. Martin, A. Sapkowski, J.K. Rowling - Harry Potter series, A. Wardziak, J.R.R. Tolkien - LOTR series, and many others.",
          },
          {
            name: "Astronomy and physics",
            description: "Observations of planets, black holes, Einstein's theory of space-time, the laws of physics in everyday life.",
          },
          { name: "Puzzles and brain teasers", description: "Traditional, 3D, metal puzzles. Sudoku, Nonogram, Hanayama. " },
          { name: "DIY projects", description: "Planning, designing and creating furniture." },
          {
            name: "Board games and card games",
            description: "7 cudów świata, Palec Boży, Wirus, Sabotażysta, Carcassonne, Dixit, Muzy, Gierki małżeńskie, Korporacja. ",
          },
        ],
        contactEmail: "mariusz.gawron1@gmail.com",
        contactPhone: "+48 782-328-747",
        contactAddress: "Kalisz",
        contactLinkedIn: "https://www.linkedin.com/in/mariusz-gawron-a92153156/",
        contactGitHub: "https://github.com/MariuszGawron",
      },
      pl: {
        name: "Mariusz Gawron",
        jobTitle: "JavaScript Developer",
        about:
          "Jestem 35 letnim programistą webowym, który nie boi się wyzwań. Od kilku lat uczestniczę w planowaniu, testowaniu i rozwoju aplikacji, które usprawniają funkcjonowanie logistyki w dużej firmie produkcyjno-logistycznej. Moje doświadczenie obejmuje zarówno rozwój projektów IT, jak i koordynację pracy zespołów ludzi, ale to, co w ostatnim czasie napędza mnie najbardziej, to rozwiązywanie realnych problemów za pomocą kodu. \n\nPracując jako Specjalista ds. rozwoju aplikacji, rozwijam narzędzia usprawniające wewnętrzne procesy firmowe, od systemów zamówień, po aplikacje do optymalizacji transportu, a także tworzę aplikację do składania zapotrzebowań transportowych dla firmowej spedycji. Zajmuję się pełnym cyklem życia aplikacji: od planowania i tworzenia, przez testowanie, wdrażanie, aż po wsparcie techniczne. \n\nPoza tworzeniem kodu, wciąż się rozwijam, uczestnicząc w kursach związanych z JavaScriptem, Oracle APEX czy Power BI. Każdy projekt traktuję jako nowe wyzwanie i okazję do nauki, ponieważ wierzę, że stały rozwój to klucz do innowacyjnych rozwiązań.",
        experience: [
          {
            title: "Specj. ds. rozwoju aplikacji - Dział Logistyki",
            company: "CORRECT - K. Błaszczyk i Wspólnicy Sp. K.",
            years: "01.2024-obecnie",
            description:
              "- Tworzenie aplikacji do składania zapotrzebowań transportowych na potrzeby wewnętrzne firmy (EVAN) - HTML, JS, PHP, PL/SQL. \n- Testy, konfiguracja i wsparcie merytoryczne przy tworzeniu oprogramowania do planowania zamówień klienta, zasilane różnymi kanałami komunikacyjnymi - EDI, FTP, WEB. \n- Współpraca i wsparcie merytoryczne z zespołem programistów firmy zewnętrznej przy tworzeniu portalu do rejestracji i awizacji transportu, wymiany informacji z klientami zewnętrznymi i wewnętrznymi. \nWsparcie techniczne przy tworzeniu programów (Vehicle Movement, ABC, Hermes), oraz API na potrzeby wewnętrzne firmy - IIS.",
          },
          {
            title: "Project Manager - Dział Logistyki",
            company: "CORRECT - K. Błaszczyk i Wspólnicy Sp. K.",
            years: "08.2023-12.2023",
            description:
              "- Wsparcie merytoryczne koordynatora ds. logistyki i koordynatora ds. transportu. \n- Rozwój, testowanie i utrzymanie bieżących aplikacji. \n- Tworzenie aplikacji do optymalizacji załadunku towaru - HTML, JS, PHP.",
          },
          {
            title: "Koordynator ds. logistyki - Dział Logistyki",
            company: "CORRECT - K. Błaszczyk i Wspólnicy Sp. K.",
            years: "04.2019-07.2023",
            description:
              "- Koordynowanie pracy obszaru logistyki i obszaru transportu. \n- Optymalizacja procesów i wdrażanie usprawnień. \n- Analizowanie oraz kontrola procesu realizacji zamówień zgodnie z wyznaczonymi wskaźnikami ekonomicznymi i logistycznymi. \n- Udzielanie wszelkich, niezbędnych informacji klientom strategicznym firmy w obszarach bieżącej współpracy. \n- Sporządzanie, analizowanie, dystrybucja określonych raportów logistycznych. \n- Konfigurowanie, zarządzanie, rozwój i testowanie systememu logistycznego. \n- Nadzór i kontrola nad  poprawnością wymiany danych pomiędzy systemami informatycznymi - EDI, FTP, WEB. \n- Comiesięczna ocena 30 podległych pracowników. \n- Tworzenie i nadzór nad procedurami i instrukcjami działowymi.",
          },
          {
            title: "Specj. ds. logistyki - Dział Logistyki",
            company: "CORRECT - K. Błaszczyk i Wspólnicy Sp. K.",
            years: "06.2018-03.2019",
            description: "- Planowanie załadunków bieżących zamówień klientów. \n- Raportowanie i kontakt z klientami, działami współpracującymi.",
          },
          {
            title: "Mł specj. ds. logistyki - Dział Logistyki",
            company: "CORRECT - K. Błaszczyk i Wspólnicy Sp. K.",
            years: "02.2017 - 05.2018",
            description: "- Planowanie załadunków bieżących zamówień klientów.",
          },
          // {
          //   title: "Ref. ds. obsługi transportu - Dział Obsługi Transportu",
          //   company: "CORRECT - K. Błaszczyk i Wspólnicy Sp. K.",
          //   years: "02.2016-02.2017",
          //   description: "- Przygotowywanie dokumentacji transportowej po załadunku samochodów ciężarowych dla kierowców, agencji celnej, księgowości.",
          // },
          // {
          //   title: "Technik utrzymanie ruchu",
          //   company: "CORRECT - K. Błaszczyk i Wspólnicy Sp. K.",
          //   years: "02.2015-01.2016",
          //   description: "- Naprawy, remonty i utrzymanie w ruchu maszyn do produkcji sprężyn, materaców sprężynowych i materaców piankowych.",
          // },
          // {
          //   title: "Maszynista chłodniczy",
          //   company: "P.P.H.U. Alces – Chłodnia składowa",
          //   years: "06.2014-01.2015",
          //   description: "- Obsługa, dozór i utrzymanie w ruchu maszynowni chłodniczej.",
          // },
          // {
          //   title: "Własna Działalność",
          //   company: "Sklep internetowy",
          //   years: "12.2013-07.2014 ",
          //   description: "- Prowadzenie sklepu internetowego, stworzonego na PrestaShop.",
          // },
          // {
          //   title: "Monter instalacji chłodniczych",
          //   company: "Tech Mors. Zakład techniki chłodniczej. Żuk D.",
          //   years: "01.2013-10.2013",
          //   description: "- Tworzenie, remonty i utrzymanie w ruchu instalacji chłodniczych.",
          // },
          // {
          //   title: "Mechanik urządzeń chłodniczych",
          //   company: "Grupa Producentów Owoców i Warzyw „Family Farm” Sp. z o.o.",
          //   years: "12.2011-12.2012",
          //   description: "- Obsługa, dozór i utrzymanie w ruchu maszynowni chłodniczej.",
          // },
          // {
          //   title: "Maszynista Chłodniczy",
          //   company: "Calfrost Sp. z o.o.",
          //   years: "08.2010-11.2011",
          //   description: "- Obsługa, dozór i utrzymanie w ruchu maszynowni chłodniczej.",
          // },
          // {
          //   title: "Pomocnik maszynisty chłodniczego",
          //   company: "P.P.H.U. Alces – Chłodnia składowa",
          //   years: "11.2009-07.2010",
          //   description: "- Obsługa maszynowni chłodniczej.",
          // },
          // {
          //   title: "Przedstawiciel handlowy – Doradca Klienta",
          //   company: "Telewizja Nowej Generacji „n”",
          //   years: "09.2008-06.2009",
          //   description: "- Doradctwo i sprzedaż usług telewizyjnych.",
          // },
          // {
          //   title: "Magazynier - praca sezonowa",
          //   company: "Przedsiębiorstwo Produkcji Lodów „Koral”",
          //   years: "06.2008-09.2008",
          //   description: "- Przygotowywanie towaru pod zamówienie.",
          // },
        ],
        education: [
          {
            course: "SQL dla średnio zaawansowanych - kurs",
            school: "JSystems Sp. z o.o.",
            years: "11.2024",
            description: "Pisanie zapytań w oparciu o więcej niż jedną tabelę, modyfikowanie danych w oparciu o inne tabele, przywracanie zapisywanych zmian.",
            certificate: "/img/SQL2.pdf",
            certificateThumbnail: "/img/SQL2.jpg",
          },
          {
            course: "Podstawowy Oracle SQL - kurs",
            school: "JSystems Sp. z o.o.",
            years: "10.2024",
            description:
              "Korzystanie z podstawowych narzędzi developerskich, odpytywanie baz danych w celu pobierania danych, tworzenie skomplikowanych raportów na podstawie danych, tworzenie i zarządzanie obiektami niezbędnymi do przechowywania danych, modyfikowanie, dodawanie oraz kasowanie danych w sposób bezpieczny dla spójności danych.",
            certificate: "/img/SQL.pdf",
            certificateThumbnail: "/img/SQL.jpg",
          },
          {
            course: "JavaScript Developer - kurs",
            school: "Coders Lab",
            years: "10.2023 - 08.2024",
            description:
              "Zakres tematyczny: zaawansowany HTML i CSS, SASS i RWD, JavaScript, ECMAScript 6, React, projekt zaliczeniowy, zaawansowane zarządzanie stanem aplikacji, testowanie, Docker. Kurs obejmował 500 godzin wykładów, zajęć praktycznych z wykładowcą oraz nauki własnej.",
            certificate: "/img/JavaScript.pdf",
            certificateThumbnail: "/img/JavaScript.jpg",
          },
          {
            course: "Oracle APEX - kurs",
            school: "DBE Andrzej Nowakowski",
            years: "11.2023",
            description: "Szkolenie Oracle APEX z zakresu tworzenia i administracji aplikacji w technologii Oracle Application Express.",
            certificate: "/img/Apex.pdf",
            certificateThumbnail: "/img/Apex.jpg",
          },
          {
            course: "Power BI + SQL - kurs",
            school: "JSystems Sp. z o.o.",
            years: "09.2021",
            description:
              "Praca z modelami opartymi na wielu tabelach, model danych Power Query dla Power BI Desktop, zaawansowane elementy wizualne, udostępnianie raportów Power BI Desktop, podstawy języka SQL w Power BI oraz etapy przetwarzania danych w Power BI",
            certificate: "/img/Power BI + SQL.pdf",
            certificateThumbnail: "/img/Power BI + SQL.jpg",
          },
          {
            course: "Aplikacje internetowe i mobilne - studia podyplomowe",
            school: "Wyższa Szkoła Bankowa w Poznaniu",
            years: "10.2017 - 06.2018",
            description:
              "Tworzenie responsywnych stron i aplikacji internetowych w oparciu o HTML5/CSS3, Ajax, PHP, Javascript, ASP.NET, tworzenia natywnych aplikacji mobilnych w języku Java i .NET, zastosowanie środowisk programistycznych dla systemów Android.",
            certificate: "",
            certificateThumbnail: "",
          },
          {
            course: "Inżynieria Środowiska - studia inżynierskie",
            school: "Państwowa Wyższa Szkoła Zawodowa w Kaliszu",
            years: "10.2011 - 05.2014",
            description: "",
            certificate: "",
            certificateThumbnail: "",
          },
        ],
        hardSkills: [
          { name: "JavaScript", level: 3 },
          { name: "PHP", level: 3 },
          { name: "JAVA", level: 1 },
          { name: "React", level: 2 },
          { name: "APEX", level: 1 },
          { name: "CSS", level: 3 },
          { name: "SASS", level: 1 },
          { name: "PL/SQL", level: 1 },
          { name: "HTML", level: 3 },
        ],
        softSkills: [
          { name: "Zaangażowanie" },
          { name: "Myślenie krytyczne" },
          { name: "Adaptacyjność" },
          { name: "Komunikatywność" },
          { name: "Analityczne myślenie" },
          { name: "Angielski - B2" },
        ],
        softwareSkills: [
          { name: "Excel", level: 5 },
          { name: "Word, PowerPoint", level: 4 },
          { name: "Power BI", level: 3 },
          { name: "Power Automate", level: 3 },
          { name: "VSC", level: 4 },
          { name: "ASANA", level: 4 },
          { name: "TRELLO", level: 3 },
          { name: "GIT", level: 3 },
          { name: "ZABBIX", level: 3 },
          { name: "IIS", level: 2 },
        ],
        projects: [
          {
            name: "Game of life",
            technology: "React",
            link: "https://mg-gameoflife.netlify.app/",
            thumbnail: "/img/GameOfLife.jpg",
            github: "https://github.com/MariuszGawron/game-of-life",
            description:
              "Gra w życie - aplikacja stworzona w React. Gra jest dokładnie opisana w internecie, ale w mojej wersji dodałem możliwość modyfikacji zasad, czyli określenia, kiedy komórka staje się martwa, żywa oraz kiedy się rodzi. Umożliwiłem również zmianę szybkości symulacji, a także rozmiaru planszy i pojedynczej komórki. Istnieje także możliwość zmiany kolorów komórek, które przetrwały określoną liczbę cykli. Wprowadziłem kilka interesujących kombinacji zasad, które prowadzą do powstania oryginalnych wzorów.",
          },
          {
            name: "Oddam za darmo",
            technology: "React",
            link: "https://mg-oddam.netlify.app/",
            thumbnail: "/img/Oddam.jpg",
            github: "https://github.com/MariuszGawron/oddam_w_dobre_rece",
            description: "Strona powstała na potrzeby kursu JS Developer.",
          },
          {
            name: "CV",
            technology: "React",
            link: "/img/CV-Mariusz-Gawron.pdf",
            thumbnail: "/img/CV.jpg",
            github: "https://github.com/MariuszGawron/my-cv",
            description: "To jest właśnie ta strona na której jesteś ;-)",
          },
          {
            name: "eVan",
            technology: "JS, PHP",
            link: "photo.html",
            thumbnail: "/img/eVan1.jpg",
            github: "",
            description:
              "Strona stworzona na potrzeby spedycji w dużej firmie produkcyjno-logistycznej. Umożliwia tworzenie zapotrzebowań transportowych przez pracowników firmy (transport drogowy, morski, kolejowy, lotniczy, kurierski). Do każdego zapotrzebowania można dodać miejsca załadunków i rozładunków z ustaleniem konkretnych dat oraz dodatkowymi wymaganiami, takimi jak ADR i warunki dostaw. Dla każdego zapotrzebowania można przypisać faktury za towar, faktury transportowe, koszty do projektów itd. Aplikacja pozwala na obsługę przez użytkowników składających zapotrzebowanie, przyjmujących zapotrzebowanie oraz konfigurujących i parametryzujących sposób działania aplikacji. Zachowanie aplikacji w głównej mierze opiera się na parametrach. Dostępy użytkowników są definiowane na poziomie ról, a nazewnictwo, sposób zachowania formularzy oraz widoczność przycisków są oparte na parametrach definiowanych przez administratora aplikacji.",
          },
        ],
        interests: [
          {
            name: "Książki postapokaliptyczne, horrory, fantasy",
            description:
              "A. Rogoziński, R. Szmidt - Seria Szczury Wrocławia, Uniwersum Metro, D. Glukhovsky -  Seria Metro 2033, S. King, G. R.R. Martin, A. Sapkowski, J.K. Rowling - Seria Harry Potter, A. Wardziak, J.R.R. Tolkien - Seria LOTR, i wiele innych.",
          },
          {
            name: "Astronomia i fizyka",
            description: "Obserwacje planet, czarne dziury, teoria Einsteina w odniesieniu do czasoprzestrzeni, prawa fizyki w życiu codziennym.",
          },
          {
            name: "Puzzle i łamigłówki",
            description: "Puzzle tradycyjne, 3d, metalowe. Sudoku, Nonogram, Hanayama. ",
          },
          { name: "Majsterkowanie", description: "Planowanie, projektowanie i tworzenie mebli." },
          {
            name: "Gry planszowe i karciane",
            description: "7 cudów świata, Palec Boży, Wirus, Sabotażysta, Carcassonne, Dixit, Muzy, Gierki małżeńskie, Korporacja. ",
          },
        ],
        contactEmail: "mariusz.gawron1@gmail.com",
        contactPhone: "+48 782-328-747",
        contactAddress: "Kalisz",
        contactLinkedIn: "https://www.linkedin.com/in/mariusz-gawron-a92153156/",
        contactGitHub: "https://github.com/MariuszGawron",
      },
    };

    setUser(data[language]);
  }, [language]);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};
