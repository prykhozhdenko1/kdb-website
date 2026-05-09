const fs = require("node:fs");

function getIcon(symbol) {
    const icon = fs.readFileSync(`./іконки/${symbol}.svg`, "utf-8");
    return `<div style="height: 14px; width: 14px; display: flex; align-items: center;">${icon.replaceAll('\n', '')}</div>`;
}

const charDefinitions = [
    ['\0', "Недійсний"],
    ['\1', "Дія", `<div style="display: flex; align-items: center">${getIcon('ДІЯ_1')}</div>`],
    ['', ""],
    ['', ""],
    ['', ""],
    ['', ""],
    ['', ""],

    ['%', "Відсоток", getIcon('%')],
    ['$', "Долар", getIcon('$')],
    ['#', "Мітка", getIcon('#')],
    ['@', "Адреса", getIcon('@')],
    ['\\', "Обернена похила", getIcon('ОБЕРКОСА')],
    ['_', "Підриска", getIcon('_')],
    ['^', "Циркумфлекс", getIcon('^')],
    ['~', "Хвиляста", getIcon('~')],
    ['=', "Двориска", getIcon('=')],

    ['0', "Нуль", getIcon('0')],
    ['1', "Один", getIcon('1')],
    ['2', "Два", getIcon('2')],
    ['3', "Три", getIcon('3')],
    ['4', "Чотири", getIcon('4')],
    ['5', "Пʼять", getIcon('5')],
    ['6', "Шість", getIcon('6')],
    ['7', "Сім", getIcon('7')],
    ['8', "Вісім", getIcon('8')],
    ['9', "Девʼять", getIcon('9')],

    ['+', "Хрестик", getIcon('+')],
    ['-', "Риска", getIcon('-')],
    ['*', "Зірочка", getIcon('*')],
    ['/', "Похила", getIcon('КОСА')],
    ['&', "І", getIcon('&')],
    ['|', "Стояча", getIcon('|')],

    ['А', "Велика буква \"А\"", getIcon('А')],
    ['Б', "Велика буква \"Б\"", getIcon('Б')],
    ['Г', "Велика буква \"Г\"", getIcon('Г')],
    ['Д', "Велика буква \"Д\"", getIcon('Д')],
    ['Е', "Велика буква \"Е\"", getIcon('Е')],
    ['З', "Велика буква \"З\"", getIcon('З')],
    ['И', "Велика буква \"И\"", getIcon('И')],
    ['І', "Велика буква \"І\"", getIcon('І')],
    ['Й', "Велика буква \"Й\"", getIcon('Й')],
    ['К', "Велика буква \"К\"", getIcon('К')],
    ['Л', "Велика буква \"Л\"", getIcon('Л')],
    ['М', "Велика буква \"М\"", getIcon('М')],
    ['Н', "Велика буква \"Н\"", getIcon('Н')],
    ['О', "Велика буква \"О\"", getIcon('О')],
    ['П', "Велика буква \"П\"", getIcon('П')],
    ['Р', "Велика буква \"Р\"", getIcon('Р')],
    ['С', "Велика буква \"С\"", getIcon('С')],
    ['Т', "Велика буква \"Т\"", getIcon('Т')],
    ['У', "Велика буква \"У\"", getIcon('У')],
    ['В', "Велика буква \"В\"", getIcon('В')],
    ['Ф', "Велика буква \"Ф\"", getIcon('Ф')],
    ['Х', "Велика буква \"Х\"", getIcon('Х')],
    ['Ш', "Велика буква \"Ш\"", getIcon('Ш')],
    ['Ж', "Велика буква \"Ж\"", getIcon('Ж')],
    ['Ц', "Велика буква \"Ц\"", getIcon('Ц')],
    ['Ч', "Велика буква \"Ч\"", getIcon('Ч')],
    ['Щ', "Велика буква \"Щ\"", getIcon('Щ')],
    ['Я', "Велика буква \"Я\"", getIcon('Я')],
    ['Є', "Велика буква \"Є\"", getIcon('Є')],
    ['Ї', "Велика буква \"Ї\"", getIcon('Ї')],
    ['Ю', "Велика буква \"Ю\"", getIcon('Ю')],
    ['Ь', "Велика буква \"Ь\"", getIcon('Ь')],

    ['а', "Мала буква \"а\"", getIcon('а')],
    ['б', "Мала буква \"б\"", getIcon('б')],
    ['г', "Мала буква \"г\"", getIcon('г')],
    ['д', "Мала буква \"д\"", getIcon('д')],
    ['е', "Мала буква \"е\"", getIcon('е')],
    ['з', "Мала буква \"з\"", getIcon('з')],
    ['и', "Мала буква \"и\"", getIcon('и')],
    ['і', "Мала буква \"і\"", getIcon('і')],
    ['й', "Мала буква \"й\"", getIcon('й')],
    ['к', "Мала буква \"к\"", getIcon('к')],
    ['л', "Мала буква \"л\"", getIcon('л')],
    ['м', "Мала буква \"м\"", getIcon('м')],
    ['н', "Мала буква \"н\"", getIcon('н')],
    ['о', "Мала буква \"о\"", getIcon('о')],
    ['п', "Мала буква \"п\"", getIcon('п')],
    ['р', "Мала буква \"р\"", getIcon('р')],
    ['с', "Мала буква \"с\"", getIcon('с')],
    ['т', "Мала буква \"т\"", getIcon('т')],
    ['у', "Мала буква \"у\"", getIcon('у')],
    ['в', "Мала буква \"в\"", getIcon('в')],
    ['ф', "Мала буква \"ф\"", getIcon('ф')],
    ['х', "Мала буква \"х\"", getIcon('х')],
    ['ш', "Мала буква \"ш\"", getIcon('ш')],
    ['ж', "Мала буква \"ж\"", getIcon('ж')],
    ['ц', "Мала буква \"ц\"", getIcon('ц')],
    ['ч', "Мала буква \"ч\"", getIcon('ч')],
    ['щ', "Мала буква \"щ\"", getIcon('щ')],
    ['я', "Мала буква \"я\"", getIcon('я')],
    ['є', "Мала буква \"є\"", getIcon('є')],
    ['ї', "Мала буква \"ї\"", getIcon('ї')],
    ['ю', "Мала буква \"ю\"", getIcon('ю')],
    ['ь', "Мала буква \"ь\"", getIcon('ь')],

    ['Ґ', "Велика буква \"Ґ\"", getIcon('Ґ')],
    ['', ""],
    ['', ""],
    ['', ""],
    ['Ъ', "Велика буква \"Ъ\"", getIcon('Ъ')],

    ['ґ', "Мала буква \"ґ\"", getIcon('ґ')],
    ['', ""],
    ['', ""],
    ['', ""],
    ['ъ', "Мала буква \"ъ\"", getIcon('ъ')],

    ['ʼ', "Апостроф", getIcon('ʼ')],
    [',', "Кома", getIcon(',')],
    [':', "Двокрапка", getIcon(':')],
    [';', "Крапкакома", getIcon(';')],
    ['.', "Крапка", getIcon('.')],
    ['?', "Питання", getIcon('?')],
    ['!', "Оклик", getIcon('!')],

    ['"', "Дволапка", getIcon('"')],
    ['\'', "Однолапка", getIcon('\'')],
    ['`', "Косолапка", getIcon('`')],

    ['[', "Відкрита квадратна дужка", getIcon('[')],
    [']', "Закрита квадратна дужка", getIcon(']')],
    ['(', "Відкрита дужка", getIcon('(')],
    [')', "Закрита дужка", getIcon(')')],
    ['{', "Відкрита фігурна дужка", getIcon('{')],
    ['}', "Закрита фігурна дужка", getIcon('}')],
    ['<', "Менше", getIcon('<')],
    ['>', "Більше", getIcon('>')],

    ['', ""],
    ['', ""],

    [' ', "Пропуск"],
    ['\n', "Міжряд"],
];

const textEncoder = new TextEncoder();

const lines = charDefinitions.map(([char, definition, logo], index) => {
    const columns = [];
    if (logo) {
        columns.push(logo);
    } else if (char) {
        if (char.charCodeAt(0) > 32) {
            columns.push(char[0].replaceAll('\n', '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'));
        } else {
            columns.push(definition);
        }
    } else {
        columns.push('<small style="color: rgb(var(--muted-rgb));"><i>невизначено</i></small>');
    }
    columns.push(String(index));
    columns.push(`${index.toString(2)}`);
    if (char) {
        let value = String(char.charCodeAt(0));
        const encoded = textEncoder.encode(char[0]);
        if (encoded.length > 1) {
            value = `${value} <small>[${encoded.map((c) => c).join(', ')}]</small>`;
        }
        columns.push(`${char && char.charCodeAt(0) > 32 && char[0] !== ' ' && char[0] !== '\n' ? '<code>' + char[0].replaceAll('\n', '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;') + '</code> = ' : ''}${value}`);
    } else {
        columns.push('');
    }
    return `<tr>${columns.map((c) => `<td>${c}</td>`).join('')}</tr>`;
});

fs.writeFileSync('символи.ю8', charDefinitions.map(([char, definition], index) => {
    if (!char) {
      return `// ${index} невизначено`;
    }
    const encoded = textEncoder.encode(char[0]);
    const name = definition.replaceAll(' ', '_').replaceAll('\"', '');
    const lines = [];
    lines.push(`стала ${name} = ${index};`);
    return lines.join('\n');
}).join('\n'));

fs.writeFileSync('відповідні_символи_юнікоду.ю8', charDefinitions.map(([char, definition], index) => {
    if (!char) {
      return `// ${index} невизначено`;
    }
    const encoded = textEncoder.encode(char[0]);
    const name = definition.replaceAll(' ', '_').replaceAll('\"', '');
    const lines = [];
    lines.push(`стала ${name} = ${char.charCodeAt(0)};`);
    return lines.join('\n');
}).join('\n'));

fs.writeFileSync('отримати_символ_ю8_з_т32.ю8', charDefinitions.map(([char, definition], index) => {
    if (!char) {
      return `// ${index} невизначено`;
    }
    const encoded = textEncoder.encode(char[0]);
    const name = definition.replaceAll(' ', '_').replaceAll('\"', '');
    const lines = [];
    lines.push(`якщо символ_КД == символи::${name} {`);
    if (encoded.length === 1) {
        lines.push(`  вихід_першого_байта::вміст = відповідні_символи_юнікоду::${name};`);
        lines.push(`  вихід_розміру::вміст = 1;`);
        lines.push(`  вернути так;`);
    }
    if (encoded.length === 2) {
        lines.push(`  вихід_першого_байта::вміст = п8(п32(192) | (п32(відповідні_символи_юнікоду::${name}) >> 6));`);
        lines.push(`  вихід_другого_байта::вміст = п8(п32(128) | (п32(відповідні_символи_юнікоду::${name}) & 63));`);
        lines.push(`  вихід_розміру::вміст = 2;`);
        lines.push(`  вернути так;`);
    }
    if (encoded.length === 3) {
        lines.push(`  вихід_першого_байта::вміст = п8(п32(224) | (п32(відповідні_символи_юнікоду::${name}) >> 12));`);
        lines.push(`  вихід_другого_байта::вміст = п8(п32(128) | ((п32(відповідні_символи_юнікоду::${name}) >> 6) & 63));`);
        lines.push(`  вихід_третього_байта::вміст = п8(п32(128) | (п32(відповідні_символи_юнікоду::${name}) & 63));`);
        lines.push(`  вихід_розміру::вміст = 3;`);
        lines.push(`  вернути так;`);
    }
    lines.push(`}`);
    return lines.join('\n');
}).join('\n'));

fs.writeFileSync('отримати_символ_т8_з_ю32.ю8', charDefinitions.map(([char, definition], index) => {
    if (!char) {
      return `// ${index} невизначено`;
    }
    const name = definition.replaceAll(' ', '_').replaceAll('\"', '');
    const lines = [];
    lines.push(`якщо символ_Ю32 == відповідні_символи_юнікоду::${name} {`);
    lines.push(`  вихід_першого_байта::вміст = символи::${name};`);
    lines.push(`  вихід_розміру::вміст = 1;`);
    lines.push(`  вернути так;`);
    lines.push(`}`);
    return lines.join('\n');
}).join('\n'));

const tbodyContent = lines.join('');
console.log(`<html lang="uk">
  <head>
    <title>КДБ</title>

    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="icon" type="image/png" href="./ресурси/кдб.лого.png" />
    <link
      rel="icon"
      sizes="any"
      type="image/svg+xml"
      href="./ресурси/кдб.лого.svg"
    />

    <style>
@font-face {
  font-family: "Roboto";
  src: url("документи/ресурси/тема/Roboto/Roboto-Black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("документи/ресурси/тема/Roboto/Roboto-BlackItalic.ttf") format("truetype");
  font-weight: 900;
  font-style: italic;
}
@font-face {
  font-family: "Roboto";
  src: url("документи/ресурси/тема/Roboto/Roboto-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("документи/ресурси/тема/Roboto/Roboto-BoldItalic.ttf") format("truetype");
  font-weight: 700;
  font-style: italic;
}
@font-face {
  font-family: "Roboto";
  src: url("документи/ресурси/тема/Roboto/Roboto-Italic.ttf") format("truetype");
  font-weight: 400;
  font-style: italic;
}
@font-face {
  font-family: "Roboto";
  src: url("документи/ресурси/тема/Roboto/Roboto-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("документи/ресурси/тема/Roboto/Roboto-LightItalic.ttf") format("truetype");
  font-weight: 300;
  font-style: italic;
}
@font-face {
  font-family: "Roboto";
  src: url("документи/ресурси/тема/Roboto/Roboto-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("документи/ресурси/тема/Roboto/Roboto-MediumItalic.ttf") format("truetype");
  font-weight: 500;
  font-style: italic;
}
@font-face {
  font-family: "Roboto";
  src: url("документи/ресурси/тема/Roboto/Roboto-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("документи/ресурси/тема/Roboto/Roboto-Thin.ttf") format("truetype");
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("документи/ресурси/тема/Roboto/Roboto-ThinItalic.ttf") format("truetype");
  font-weight: 100;
  font-style: italic;
}

@font-face {
  font-family: "Fira Code";
  src: url("FiraCode.ttf") format("truetype");
}

html {
  --font-family: "Roboto", sans-serif;
  --bg-rgb: 255, 255, 255;
  --text-rgb: 0, 0, 0;
  --muted-rgb: 68, 68, 68;
  --border-rgb: 221, 221, 221;
  --hover-rgb: 238, 238, 238;
  --pressed-rgb: 221, 221, 221;
  --primary-rgb: 0, 0, 0;
  --primary-text-rgb: 255, 255, 255;
  --code-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  --nav-bgbg-rgb: 248, 248, 248;
  --nav-bg-rgb: 238, 238, 238;
  --nav-text-rgb: 0, 0, 0;
  --nav-hover-rgb: 221, 221, 221;
  --nav-pressed-rgb: 204, 204, 204;
  --nav-active-rgb: 0, 0, 0;
  --nav-active-text-rgb: 255, 255, 255;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html {
  width: 100%;
  height: 100%;
  font-family: var(--font-family);
  background: rgb(var(--bg-rgb));
  color: rgb(var(--text-rgb));
  font-feature-settings: "liga" 0;
  font-variant-ligatures: none;
}

@media (prefers-color-scheme: dark) {
  html {
    --blue-text-rgb: 0, 0, 0;
    --red-text-rgb: 0, 0, 0;
    --bg-rgb: 0, 0, 0;
    --text-rgb: 255, 255, 255;
    --muted-rgb: 153, 153, 153;
    --border-rgb: 34, 34, 34;
    --hover-rgb: 24, 24, 24;
    --pressed-rgb: 31, 31, 31;
    --code-shadow: 0 0 0 1px #333;
    --primary-rgb: 255, 255, 255;
    --primary-text-rgb: 0, 0, 0;
    --nav-bgbg-rgb: 18, 18, 18;
    --nav-bg-rgb: 24, 24, 24;
    --nav-text-rgb: 255, 255, 255;
    --nav-hover-rgb: 31, 31, 31;
    --nav-pressed-rgb: 38, 38, 38;
    --nav-active-rgb: 255, 255, 255;
    --nav-active-text-rgb: 0, 0, 0;
  }

  html img:not(.no-dark-shadow),
  html svg:not(.no-dark-shadow) {
    filter: drop-shadow(0 0 1px white);
  }
}

button {
  font-family: var(--font-family);
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

pre,
code {
  font-family: "Fira Code", monospace !important;
  font-weight: 500;
}

a {
  color: rgb(var(--text-rgb));
}

html.mobile [data-hidden-on-mobile=true] {
  display: none;
}

code:not(.hljs) {
  padding: 0.1rem 0.5rem;
  background-color: black;
  color: white;
  border-radius: 1rem;
  font-size: 0.9rem;
  box-sizing: border-box;
  font-family: "Fira Code", monospace;
  box-shadow: var(--code-shadow);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

table th,
table td {
  padding: 0.5rem;
  border: 1px solid rgb(var(--border-rgb));
}

table th {
  background: rgb(var(--bg-rgb));
  color: rgb(var(--text-rgb));
  font-weight: 500;
}

table td {
  background: rgb(var(--bg-rgb));
  color: rgb(var(--text-rgb));
}

table tr:nth-child(odd) {
  background: rgb(var(--hover-rgb));
}

table tr:nth-child(even) {
  background: rgb(var(--bg-rgb));
}

table tr:hover {
  background: rgb(var(--hover-rgb));
}

table tr:active {
  background: rgb(var(--pressed-rgb));
}

table a {
  color: rgb(var(--text-rgb));
  text-decoration: none;
  font-weight: 500;
}

table a:hover {
  text-decoration: underline;
}

table a:active {
  color: rgb(var(--text-rgb));
}

table img {
  max-width: 100%;
  height: auto;
}

blockquote {
  background: rgba(var(--text-rgb), 0.125);
  border-left: 0.25rem solid rgb(var(--text-rgb));
  padding: 0.25rem 1rem;
  margin: 1rem 0;
}

hr {
  border: 1px dashed rgb(var(--border-rgb));
  margin: 2rem 0;
}

hr.table {
  border: none;
  border-top: 1px solid rgb(var(--border-rgb));
  margin: 0.5rem 0;
}

h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

      main {
        max-width: 800px;
        padding: 0 2rem;
        margin: 0 auto;
      }

      .logo {
        width: 3rem;
        margin: 2rem auto 0 auto;
      }

      nav {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin: 2rem 0;
        width: 100%;
      }

      nav a,
      nav button {
        width: 100%;
        padding: 0.5rem 1rem;
        background: rgb(var(--bg-rgb));
        color: rgb(var(--text-rgb));
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        font-weight: 500;
        font-size: 1rem;
        text-decoration: none;
        text-align: center;
      }

      nav a:hover,
      nav button:hover,
      nav a.active,
      nav button.active {
        background: rgb(var(--nav-bg-rgb));
        color: rgb(var(--nav-text-rgb));
      }
    </style>
  </head>
  <body>
    <main>
      <div class="logo">
        <svg viewBox="0 0 88 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="57" y="45" width="30" height="30" fill="#828282"/>
          <path d="M44 0L87.3013 75H0.69873L44 0Z" fill="black"/>
          <circle cx="22" cy="45" r="15" fill="#7D7D7D"/>
        </svg>
      </div>
      <nav>
        <button class="active">Коди</button>
        <a href="./документи/index.html">Документи</a>
      </nav>
      <table>
        <thead>
          <tr>
            <th>Знак</th>
            <th><small><i>10</i></small></th>
            <th><small><i>2</i></small></th>
            <th>Юнікод</th>
          </tr>
        </thead>
        <tbody>
          ${tbodyContent}
        </tbody>
      </table>
      <p>Додаткові можливості з використанням коду Дії (1):</p>
      <ul>
        <li>Код Дії означає, що наступний код є вказівкою (до прикладу змінити колір тексту).</li>
        <li>Вказівка 1 (два коди Дії підряд) означає перехід до наступного ряду вказівок (відповідно очікується, що наступний код також буде вказівкою).</li>
      </ul>
    </main>
    <footer style="margin: 0 auto; max-width: 600px; display: block; margin-top: 2rem; padding-bottom: 1rem;">
      <a href="https://дійсність.укр">
        <svg
          style="height: auto; width: 100%;"
          width="1503"
          height="93"
          viewBox="0 0 1503 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="1503"
            height="93"
            fill="var(--background-color)"
          ></rect>
          <line
            x1="752.072"
            y1="45.4948"
            x2="436.072"
            y2="91.4948"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.154"
            y1="45.4756"
            x2="607.154"
            y2="92.4756"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.106"
            y1="45.4886"
            x2="540.106"
            y2="91.4886"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.214"
            y1="45.4517"
            x2="653.214"
            y2="92.4517"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.266"
            y1="45.4237"
            x2="677.266"
            y2="92.4237"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.332"
            y1="45.3741"
            x2="699.332"
            y2="92.3741"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.417"
            y1="45.2753"
            x2="721.417"
            y2="92.2753"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.482"
            y1="45.1333"
            x2="739.482"
            y2="92.1333"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.476"
            y1="44.848"
            x2="767.476"
            y2="91.848"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.177"
            y1="44.7407"
            x2="876.177"
            y2="91.5322"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.12"
            y1="44.7231"
            x2="941.12"
            y2="91.5146"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.227"
            y1="44.7628"
            x2="844.227"
            y2="91.5543"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.278"
            y1="44.7928"
            x2="822.278"
            y2="91.5843"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.327"
            y1="44.8306"
            x2="806.327"
            y2="91.6221"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.413"
            y1="44.9262"
            x2="784.413"
            y2="91.7178"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.068"
            y1="46.5047"
            x2="1078.07"
            y2="91.5047"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.031"
            y1="46.5009"
            x2="1502.03"
            y2="92.4399"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="751.97"
            y1="46.5009"
            x2="1501.97"
            y2="1.50089"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="751.9"
            y1="46.5101"
            x2="971.9"
            y2="1.51014"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="753.5"
            y1="46"
            x2="753.5"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="751.934"
            y1="47.4956"
            x2="414.934"
            y2="2.4956"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="751.864"
            y1="47.4811"
            x2="585.864"
            y2="0.481089"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="751.721"
            y1="47.4151"
            x2="681.721"
            y2="0.415108"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="751.595"
            y1="47.2931"
            x2="717.595"
            y2="0.293062"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="751.557"
            y1="46.7687"
            x2="775.557"
            y2="0.768718"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="751.712"
            y1="46.591"
            x2="815.712"
            y2="1.59099"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="751.836"
            y1="46.5275"
            x2="881.836"
            y2="1.52751"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="751.985"
            y1="47.4998"
            x2="0.984503"
            y2="25.529"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.027"
            y1="47.4993"
            x2="1.02425"
            y2="88.4449"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <line
            x1="752.5"
            y1="46.9889"
            x2="753.5"
            y2="91.9889"
            stroke="rgb(var(--text-rgb))"
          ></line>
          <path d="M753 18L796 63H710L753 18Z" fill="white"></path>
          <rect
            x="748"
            y="39"
            width="10"
            height="16"
            fill="transparent"
          ></rect>
          <rect x="752" y="39" width="2" height="2" fill="black"></rect>
          <rect x="752" y="43" width="2" height="2" fill="black"></rect>
          <rect x="750" y="43" width="2" height="2" fill="black"></rect>
          <rect x="754" y="43" width="2" height="2" fill="black"></rect>
          <rect x="754" y="51" width="2" height="2" fill="black"></rect>
          <rect x="750" y="51" width="2" height="2" fill="black"></rect>
          <rect x="752" y="47" width="2" height="2" fill="black"></rect>
          <rect x="752" y="45" width="2" height="2" fill="black"></rect>
          <rect x="752" y="49" width="2" height="2" fill="black"></rect>
          <rect x="752" y="51" width="2" height="2" fill="black"></rect>
          <rect
            x="760"
            y="39"
            width="10"
            height="16"
            fill="transparent"
          ></rect>
          <rect x="760" y="43" width="2" height="2" fill="black"></rect>
          <rect x="764" y="41" width="2" height="2" fill="black"></rect>
          <rect x="768" y="43" width="2" height="2" fill="black"></rect>
          <rect x="768" y="45" width="2" height="2" fill="black"></rect>
          <rect x="768" y="49" width="2" height="2" fill="black"></rect>
          <rect x="768" y="51" width="2" height="2" fill="black"></rect>
          <rect x="760" y="45" width="2" height="2" fill="black"></rect>
          <rect x="760" y="47" width="2" height="2" fill="black"></rect>
          <rect x="760" y="49" width="2" height="2" fill="black"></rect>
          <rect x="760" y="51" width="2" height="2" fill="black"></rect>
          <rect x="764" y="47" width="2" height="2" fill="black"></rect>
          <rect x="762" y="49" width="2" height="2" fill="black"></rect>
          <rect x="766" y="45" width="2" height="2" fill="black"></rect>
          <rect x="768" y="47" width="2" height="2" fill="black"></rect>
          <rect
            x="736"
            y="39"
            width="10"
            height="16"
            fill="transparent"
          ></rect>
          <rect x="740" y="45" width="2" height="2" fill="black"></rect>
          <rect x="744" y="47" width="2" height="2" fill="black"></rect>
          <rect x="736" y="43" width="2" height="2" fill="black"></rect>
          <rect x="740" y="51" width="2" height="2" fill="black"></rect>
          <rect x="744" y="49" width="2" height="2" fill="black"></rect>
          <rect x="738" y="49" width="2" height="2" fill="black"></rect>
          <rect x="742" y="51" width="2" height="2" fill="black"></rect>
          <rect x="736" y="51" width="2" height="2" fill="black"></rect>
          <rect x="736" y="51" width="2" height="2" fill="black"></rect>
          <rect x="744" y="43" width="2" height="2" fill="black"></rect>
          <rect x="744" y="45" width="2" height="2" fill="black"></rect>
          <rect x="740" y="43" width="2" height="2" fill="black"></rect>
          <rect x="742" y="41" width="2" height="2" fill="black"></rect>
          <rect x="740" y="41" width="2" height="2" fill="black"></rect>
          <rect x="738" y="41" width="2" height="2" fill="black"></rect>
          <rect x="738" y="47" width="2" height="2" fill="black"></rect>
          <rect x="738" y="51" width="2" height="2" fill="black"></rect>
        </svg>
      </a>
    </footer>
  </body>
</html>
`);

// const charset = charDefinitions.map(([char]) => char[0]).filter((char) => char && char !== '\n').join('');
// console.log(charset);