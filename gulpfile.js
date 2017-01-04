var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.less('app.less');

    mix.browserify([
        './node_modules/xmlbuilder/lib/index.js'
    ], 'resources/assets/js/xmlbuilder.js',
        null,
        { standalone: 'XmlBuilder' }
    );

    mix.scriptsIn('resources/assets/js/app/', 'public/js/ninja.js');

    mix.scripts([
        './bower_components/jquery/dist/jquery.js',
        './bower_components/jquery-ui/jquery-ui.min.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js',
        './bower_components/datatables/media/js/jquery.dataTables.min.js',
        './bower_components/datatables-bootstrap3/BS3/assets/js/datatables.js',
        './bower_components/knockout.js/knockout.js',
        './bower_components/knockout-mapping/build/output/knockout.mapping-latest.js',
        './bower_components/knockout-sortable/build/knockout-sortable.min.js',
        './bower_components/underscore/underscore.js',
        './bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
        './bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.de.min.js',
        './bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.da.min.js',
        './bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.pt-BR.min.js',
        './bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.nl.min.js',
        './bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js',
        './bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.it.min.js',
        './bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.lt.min.js',
        './bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.no.min.js',
        './bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.es.min.js',
        './bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.sv.min.js',
        './bower_components/dropzone/dist/min/dropzone.min.js',
        './bower_components/typeahead.js/dist/typeahead.jquery.min.js',
        './bower_components/accounting/accounting.min.js',
        './bower_components/spectrum/spectrum.js',
        './bower_components/jspdf/dist/jspdf.min.js',
        './bower_components/moment/min/moment.min.js',
        './bower_components/moment-timezone/builds/moment-timezone-with-data.min.js',
        './bower_components/stacktrace-js/dist/stacktrace-with-polyfills.min.js',
        './bower_components/fuse.js/src/fuse.min.js',
        './bower_components/floatlabel.js/floatlabels.js',
        './bower_components/select2/dist/js/select2.js',
        './bower_components/iCheck/icheck.js',
        './bower_components/bootstrap-select/dist/js/bootstrap-select.js',
        './node_modules/quill/dist/quill.js',
        'jquery.datetimepicker.js',
        'lightbox.min.js',
        'xmlbuilder.js',
        'bootstrap-combobox.js',
        'script.js',
        'listview.js',
        'bulk.js',
        'tablefilter.js',
        'invoicemodal.js',
        'pdf.pdfmake.js',
        'zugferd_xml.js',
        'zugferd_invoice.js',
        'googlemaps.js'
    ], 'public/js/app.js');

    mix.scripts([
        './node_modules/chart.js/dist/Chart.js',
        './node_modules/d3/d3.js',
        'homer.js'
    ], 'public/js/dashboard.js');

    mix.scripts([
        'pdf_viewer.js',
        'compatibility.js',
        './bower_components/pdfmake/build/pdfmake.js',
        'vfs.js'
    ], 'public/js/pdf.built.js');

    mix.scripts([
        'pdf_viewer.worker.js'
    ], 'public/js/pdf_viewer.worker.js');

    mix.styles([
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
        './bower_components/datatables/media/css/jquery.dataTables.css',
        './bower_components/datatables-bootstrap3/BS3/assets/css/datatables.css',
        './bower_components/font-awesome/css/font-awesome.css',
        './bower_components/animate.css/animate.css',
        './bower_components/pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.css',
        './bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
        './bower_components/dropzone/dist/min/dropzone.min.css',
        './bower_components/spectrum/spectrum.css',
        './bower_components/bootstrap-combobox/css/bootstrap-combobox.css',
        './bower_components/select2/dist/css/select2.css',
        './bower_components/bootstrap-select/dist/css/bootstrap-select.css',
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
        './bower_components/font-awesome/css/font-awesome.min.css',
        './bower_components/animate.css/animate.min.css',
        './bower_components/pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css',
        './bower_components/bootstrap-combobox/css/bootstrap-combobox.css',
        './bower_components/datatables/media/css/jquery.dataTables.css',
        './bower_components/datatables-bootstrap3/BS3/assets/css/datatables.css',
        './bower_components/select2/dist/css/select2.min.css',
        './bower_components/bootstrap-select/dist/css/bootstrap-select.min.css',
        './node_modules/quill/dist/quill.snow.css',
        'public.style.css',
        'typeahead.js-bootstrap.css',
        'style.css',
        'jquery.datetimepicker.css',
        'lightbox.css'
    ]);

    mix.styles([
        'auth.css'
    ], 'public/css/auth.css');

    mix.copy([
            './node_modules/jsoneditor/dist'
        ], 'public/build/jsoneditor'
    );

    mix.copy([
        './bower_components/pixeden-stroke-7-icon/pe-icon-7-stroke/fonts',
        './bower_components/font-awesome/fonts',
        './bower_components/bootstrap/fonts'
        ], 'public/build/fonts'
    );

    mix.version([
        'public/js/app.js',
        'public/js/ninja.js',
        'public/js/pdf.built.js',
        'public/js/dashboard.js',
        'public/js/pdf_viewer.worker.js',
        'public/css/all.css',
        'public/css/auth.css',
        'public/css/app.css'
    ]);
});
