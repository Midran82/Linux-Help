//this script has been made by �yvind Fjellby June 2014
//if used on other page, plz credit me one way or another, link etc.
/*this function loads the homepage text on page load*/
$(function(){
    $("#page").load("pages/home/Home.html"); 
});
/****************************************************/
/*this function switches the info on page depending on link that was clicked*/
$ (function() {
    $ ("#info, #info2, #author,#linux, #mint, #ubuntu, #pi, \\n\
        , #help, #install, #MCserver, #NAS, #ps3M, \\n\
        , #misc, #projects, #pix, #contact, #link, #thanks").on("click", function() {
            var page = "";
            switch ($(this).prop("id")){
//                  ********this is the home links********
                case "info":
                    page="pages/home/Home.html";
                    break;
                case "info2":
                    page="pages/home/Home.html";
                    break;
                case "author":
                    page="pages/home/author.html";
                    break;
//                  ********this is the linux links********
                case "linux":
                    page="pages/linux/Linux.html";
                    break;
                case "mint":
                    page="pages/linux/mint.html";
                    break;
                case "ubuntu":
                    page="pages/linux/ubuntu.html";
                    break;
//                  ********this is the raspberry links********
                case "pi":
                    page="pages/pi/Pi.html";
                    break;
//                  ********this is the help links********
                case "help":
                    page="pages/help/Help.html";
                    break;
                case "install":
                    page="pages/help/install.html";
                    break;
                case "MCserver":
                    page="pages/help/minecraft.html";
                    break;
                case "NAS":
                    page="pages/help/NAS.html";
                    break;
                case "ps3M":
                    page="pages/help/PS3M.html";
                    break;
//                  ********this is the misc links********
                case "misc":
                    page="pages/misc/misc.html";
                    break;
                case "projects":
                    page="pages/misc/projects.html";
                    break;
                case "pix":
                    page="pages/misc/pix.html";
                    break;
//                  ********this is the "rest" links********
                case "contact":
                    page="pages/rest/contact.html";
                    break;
                case "link":
                    page="pages/rest/link.html";
                    break;
                case "thanks":
                    page="pages/rest/thanks.html";
                    break;
            }
            /*this loads the linkpage that was clicked*/
            $("#page").load(page);
            /******************************************/
        }
    );
});
/****************************************************************************/

/*Mail script to "hide" my mail from spam-crawlers.*/
  
/***************************************************/
