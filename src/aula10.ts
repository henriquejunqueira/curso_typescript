// type MarcaTenis = "abc" | "dsaf" | "fdsaf";

enum MarcaTenis2 {
   NIKE = 4,
   DSAF = "dsaf",
   FDSAF = "fdsaf",
}

interface Tenis {
   marcaTenis: MarcaTenis2;
}

const tenis: Tenis = {
   marcaTenis: MarcaTenis2.NIKE,
};

if (tenis.marcaTenis === MarcaTenis2.NIKE) {
   console.log("é nike");
}
