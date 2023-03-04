Java.perform(() => {

    const RootBeer = Java.use('com.scottyab.rootbeer.RootBeer');

    const Utils = Java.use('com.scottyab.rootbeer.util.Utils');

    const checkForBinary = RootBeer.checkForBinary;
    checkForBinary.implementation = function (v) {
        console.log("checkForBinary = false")
        return false
    };

    const isRooted = RootBeer.isRooted;
    isRooted.implementation = function (v) {
        console.log("isRooted = false")
        return false
    };

    const checkForRWPaths = RootBeer.checkForRWPaths;
    checkForRWPaths.implementation = function (v) {
        console.log("checkForRWPaths = false")
        return false
    };

    const checkSuExists = RootBeer.checkSuExists;
    checkSuExists.implementation = function (v) {
        console.log("checkSuExists = false")
        return false
    };

    const checkForNativeLibraryReadAccess = RootBeer.checkForNativeLibraryReadAccess;
    checkForNativeLibraryReadAccess.implementation = function (v) {
        console.log("checkForNativeLibraryReadAccess = false")
        return false
    };


    const checkForRootNative = RootBeer.checkForRootNative;
    checkForRootNative.implementation = function (v) {
        console.log("checkForRootNative = false")
        return false
    };


    const checkForDangerousProps = RootBeer.checkForDangerousProps;
    checkForDangerousProps.implementation = function (v) {
        console.log("checkForDangerousProps = false")
        return false
    };


    const detectTestKeys = RootBeer.detectTestKeys;
    detectTestKeys.implementation = function (v) {
        console.log("detectTestKeys = false")
        return false
    };

    const isAnyPackageFromListInstalled = RootBeer.isAnyPackageFromListInstalled;
    isAnyPackageFromListInstalled.implementation = function (v) {
        console.log("isAnyPackageFromListInstalled = false")
        return false
    };


    const canLoadNativeLibrary = RootBeer.canLoadNativeLibrary;
    canLoadNativeLibrary.implementation = function (v) {
        console.log("canLoadNativeLibrary = false")
        return false
    };

    const checkForBusyBoxBinary = RootBeer.checkForBusyBoxBinary;
    checkForBusyBoxBinary.implementation = function (v) {
        console.log("checkForBusyBoxBinary = false")
        return false
    };

    const checkForMagiskBinary = RootBeer.checkForMagiskBinary;
    checkForMagiskBinary.implementation = function (v) {
        console.log("checkForMagiskBinary = false")
        return false
    };

    const isSelinuxFlagInEnabled = Utils.isSelinuxFlagInEnabled;
    isSelinuxFlagInEnabled.implementation = function (v) {
        console.log("isSelinuxFlagInEnabled = false")
        return false
    };


});

Interceptor.attach(Module.findExportByName(null, "dlopen"), {
    onEnter: function (args) {
        var path = Memory.readUtf8String(args[0]);
        
        path = Memory.readUtf8String(args[0]);
        send(`Abrindo arquivo ${path}`);
    }    

});