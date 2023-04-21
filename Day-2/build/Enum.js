const gender = "male";
/*
string likhne me galti hoo jati kabh kabhi to galti na hoo iske liye enm ka use karte hai.sappose ek din gender me hamhe dusra gendre add karna hai and woo gender ka use ham log bahut sare place kar rahe hai too sabhi jagah error dikhega.but jab ham log enum use karenge too koi error nahi.
also jab hamara string compile hota hai too time jayada consume karta hai because we are using string.

manoo hamhe frontend per male dikhana hai but string too compile hone me time consume karta hai woo bhi jayada too iss time hamlog enum create kar sakte hai .

example niche hai.
*/
var Gender;
(function (Gender) {
    Gender["male"] = "M";
    Gender["female"] = "F";
    Gender["other"] = "*";
})(Gender || (Gender = {}));
const gender1 = Gender.male;
