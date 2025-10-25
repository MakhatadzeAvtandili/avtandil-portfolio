// პროექტების მონაცემები ორენოვანი სისტემით
export const postsData = [
  {
    id: 1,
    slug: "my-journey-to-react",
    date: "October 24, 2025",
    category_en: "Development",
    category_ka: "დეველოპმენტი",
    title_en: "My Journey to React",
    title_ka: "ჩემი მოგზაურობა React-მდე",
    excerpt_en:
      "Learn about how I started with web development and eventually fell in love with React.",
    excerpt_ka:
      "გაიგეთ, როგორ დავიწყე ვებ-დეველოპმენტი და როგორ შემიყვარდა საბოლოოდ React-ი.",
    content_en: [
      "My journey into web development started like many others: with static HTML and CSS. I built simple websites, fascinated by how lines of code could turn into visual, interactive experiences. However, I quickly realized the limitations of vanilla JavaScript and jQuery when it came to building complex, stateful applications.",
      "That's when I discovered React. The component-based architecture was a revelation. The idea of building encapsulated UIs that manage their own state completely changed my perspective on development. The virtual DOM, JSX, and the one-way data flow felt intuitive and powerful.",
      "Learning React wasn't just about learning a new library; it was about learning a new way to think about building applications. It has its learning curve, but the community, the ecosystem, and the sheer power it provides are unmatched. Today, it's my go-to tool for building anything from small widgets to large-scale enterprise applications.",
    ],
    content_ka: [
      "ჩემი მოგზაურობა ვებ-დეველოპმენტში, ისევე როგორც ბევრი სხვისი, სტატიკური HTML-ითა და CSS-ით დაიწყო. ვქმნიდი მარტივ ვებსაიტებს, აღფრთოვანებული იმით, თუ როგორ შეიძლება კოდის ხაზები ვიზუალურ, ინტერაქტიულ გამოცდილებად ქცეულიყო. თუმცა, მალევე გავაცნობიერე vanilla JavaScript-ისა და jQuery-ს შეზღუდვები, როდესაც საქმე რთული, მდგომარეობის მქონე (stateful) აპლიკაციების შექმნას ეხებოდა.",
      "სწორედ მაშინ აღმოვაჩინე React-ი. კომპონენტებზე დაფუძნებული არქიტექტურა ნამდვილი რევოლუცია იყო. ინკაფსულირებული UI-ების შექმნის იდეა, რომლებიც თავად მართავენ საკუთარ მდგომარეობას, სრულად შეცვალა ჩემი ხედვა დეველოპმენტზე. ვირტუალური DOM, JSX და მონაცემთა ცალმხრივი ნაკადი ინტუიციური და მძლავრი აღმოჩნდა.",
      "React-ის სწავლა არ იყო მხოლოდ ახალი ბიბლიოთეკის შესწავლა; ეს იყო აპლიკაციების შექმნის შესახებ ფიქრის ახალი გზის შესწავლა. მას აქვს თავისი სირთულეები, მაგრამ საზოგადოება, ეკოსისტემა და ის უზარმაზარი ძალა, რომელსაც ის გაძლევს, შეუდარებელია. დღეს ეს ჩემი მთავარი ინსტრუმენტია ნებისმიერი რამის შესაქმნელად, პატარა ვიჯეტებიდან დაწყებული მსხვილ კორპორატიულ აპლიკაციებამდე.",
    ],
  },
  {
    id: 2,
    slug: "why-tailwind-css-is-a-game-changer",
    date: "October 20, 2025",
    category_en: "Design",
    category_ka: "დიზაინი",
    title_en: "Why Tailwind CSS is a Game Changer",
    title_ka: "რატომ ცვლის Tailwind CSS თამაშის წესებს",
    excerpt_en:
      "A deep dive into utility-first CSS and how it streamlines the design-to-development process.",
    excerpt_ka:
      "Utility-first CSS-ის სიღრმისეული ანალიზი და როგორ აჩქარებს ის დიზაინიდან დეველოპმენტამდე პროცესს.",
    content_en: [
      "I admit, I was skeptical about Tailwind CSS at first. \"Isn't this just inline styles?\" I thought. But after giving it a real try on a project, I was completely converted. Tailwind isn't about writing CSS in your HTML; it's about using a predefined, constraint-based design system directly in your markup.",
      "The biggest win is speed. No more context-switching between your `.jsx` and `.css` files. No more agonizing over class names like `.user-profile-card-header-title`. You just build. The constraints provided by Tailwind's config file also ensure design consistency across the entire application.",
      "Furthermore, its JIT (Just-In-Time) engine is incredibly fast and only generates the CSS you actually use, resulting in tiny production bundles. When combined with component-based frameworks like React, it creates a development experience that is simply unmatched in terms of speed and maintainability.",
    ],
    content_ka: [
      'ვაღიარებ, თავიდან სკეპტიკურად ვიყავი განწყობილი Tailwind CSS-ის მიმართ. "ეს უბრალოდ inline სტილები არ არის?" - ვფიქრობდი. მაგრამ მას შემდეგ, რაც რეალურ პროექტზე ვცადე, სრულიად შევიცვალე აზრი. Tailwind არ არის HTML-ში CSS-ის წერა; ეს არის წინასწარ განსაზღვრული, შეზღუდვებზე დაფუძნებული დიზაინ-სისტემის პირდაპირ მარკაპში გამოყენება.',
      "ყველაზე დიდი მოგება სიჩქარეა. აღარ გიწევს მუდმივი გადართვა `.jsx` და `.css` ფაილებს შორის. აღარ გიწევს ფიქრი კლასების სახელებზე, როგორიცაა `.user-profile-card-header-title`. შენ უბრალოდ აწყობ. Tailwind-ის კონფიგურაციის ფაილით განსაზღვრული შეზღუდვები ასევე უზრუნველყოფს დიზაინის თანმიმდევრულობას მთელი აპლიკაციის მასშტაბით.",
      "ამასთან, მისი JIT (Just-In-Time) ძრავა წარმოუდგენლად სწრაფია და აგენერირებს მხოლოდ იმ CSS-ს, რომელსაც რეალურად იყენებ, რაც წარმოების (production) პატარა ზომის ფაილებს გვაძლევს. როდესაც ის React-ის მსგავს კომპონენტებზე დაფუძნებულ ფრეიმვორკებთან ერთიანდება, ის ქმნის დეველოპმენტის გამოცდილებას, რომელიც უბრალოდ შეუდარებელია სიჩქარითა და შენარჩუნებადობით.",
    ],
  },
];
