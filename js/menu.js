document.addEventListener('DOMContentLoaded', function() {

    homeElem = document.getElementById('home');
    b_control = document.getElementById('batch_control');
    b_declaration = document.getElementById('batch_declaration');
    b_download = document.getElementById('batch_download');
    b_treatment = document.getElementById('batch_treatment');

    homeElem_content = document.getElementById('home_content');
    b_control_content = document.getElementById('batch_control_content');
    b_declaration_content = document.getElementById('batch_declaration_content');
    b_download_content = document.getElementById('batch_download_content');
    b_treatment_content = document.getElementById('batch_treatment_content');

    home.addEventListener('click', function() {
        /* État actif de l'onglet */

        if (b_control.classList.contains('active') || b_declaration.classList.contains('active') || b_download.classList.contains('active') || b_treatment.classList.contains('active')) {
            b_control.classList.remove('active');
            b_declaration.classList.remove('active');
            b_download.classList.remove('active');
            b_treatment.classList.remove('active');
            homeElem.classList.add('active');
        } else {
            homeElem.classList.add('active');
        }

        /* Affichage en fonction de l'id cliqué */
        homeElem_content.classList.remove('none');
        b_control_content.classList.add('none');  
        b_declaration_content.classList.add('none');  
        b_download_content.classList.add('none');  
        b_treatment_content.classList.add('none');  
    });

    b_control.addEventListener('click', function() {
        /* État actif de l'onglet */

        if (homeElem.classList.contains('active') || b_declaration.classList.contains('active') || b_download.classList.contains('active') || b_treatment.classList.contains('active')) {
            homeElem.classList.remove('active');
            b_declaration.classList.remove('active');
            b_download.classList.remove('active');
            b_treatment.classList.remove('active');
            b_control.classList.add('active');
        } else {
            b_control.classList.add('active');
        }

        /* Affichage en fonction de l'id cliqué */
        b_control_content.classList.remove('none');  
        homeElem_content.classList.add('none');  
        b_declaration_content.classList.add('none');  
        b_download_content.classList.add('none');  
        b_treatment_content.classList.add('none');  
    });

    b_declaration.addEventListener('click', function() {
        /* État actif de l'onglet */

        if (homeElem.classList.contains('active') || b_control.classList.contains('active') || b_download.classList.contains('active') || b_treatment.classList.contains('active')) {
            homeElem.classList.remove('active');
            b_control.classList.remove('active');
            b_download.classList.remove('active');
            b_treatment.classList.remove('active');
            b_declaration.classList.add('active');
        } else {
            b_declaration.classList.add('active');
        }

        /* Affichage en fonction de l'id cliqué */
        homeElem_content.classList.add('none');
        b_control_content.classList.add('none');    
        b_download_content.classList.add('none');  
        b_treatment_content.classList.add('none');
        b_declaration_content.classList.remove('none');  
    });

    b_download.addEventListener('click', function() {
        /* État actif de l'onglet */

        if (homeElem.classList.contains('active') || b_control.classList.contains('active') || b_declaration.classList.contains('active') || b_treatment.classList.contains('active')) {
            homeElem.classList.remove('active');
            b_control.classList.remove('active');
            b_declaration.classList.remove('active');
            b_treatment.classList.remove('active');
            b_download.classList.add('active');
        } else {
            b_download.classList.add('active');
        }

        /* Affichage en fonction de l'id cliqué */
        homeElem_content.classList.add('none');
        b_control_content.classList.add('none');  
        b_declaration_content.classList.add('none');    
        b_treatment_content.classList.add('none');
        b_download_content.classList.remove('none'); 
    });

    b_treatment.addEventListener('click', function() {
        /* État actif de l'onglet */

        if (homeElem.classList.contains('active') || b_control.classList.contains('active') || b_declaration.classList.contains('active') || b_download.classList.contains('active')) {
            homeElem.classList.remove('active');
            b_control.classList.remove('active');
            b_declaration.classList.remove('active');
            b_download.classList.remove('active');
            b_treatment.classList.add('active');
        } else {
            b_treatment.classList.add('active');
        }

        /* Affichage en fonction de l'id cliqué */
        homeElem_content.classList.add('none');
        b_control_content.classList.add('none');  
        b_declaration_content.classList.add('none');  
        b_download_content.classList.add('none');  
        b_treatment_content.classList.remove('none'); 
    });

});