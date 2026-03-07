const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/"\/Prof\//g, '"/Slothana/Prof/');
code = code.replace(/'\/Prof\//g, "'/Slothana/Prof/");
code = code.replace(/"\/Iconography\//g, '"/Slothana/Iconography/');
code = code.replace(/'\/Iconography\//g, "'/Slothana/Iconography/");
code = code.replace(/"\/SlothVid/g, '"/Slothana/SlothVid');
code = code.replace(/'\/SlothVid/g, "'/Slothana/SlothVid");
code = code.replace(/'\.\.\/Prof\//g, "'/Slothana/Prof/");
code = code.replace(/'\.\.\/SlothVid/g, "'/Slothana/SlothVid");

fs.writeFileSync('src/App.tsx', code);
console.log('Paths updated successfully.');
