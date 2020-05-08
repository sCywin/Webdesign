#!C:\xampp\perl\bin\perl.exe

use strict;
use warnings;

use CGI qw(:standard);
use CGI::Carp qw(fatalsToBrowser);
print "Content-type: text/html\n\n";

#### read from data
my $nick = param('Benutzername');
my $pw = param('password');
my $mail = param('Email');

#### display results
print "<h2>Antwort des Perl CGI-Skripts</h2>";
print "Der Nick ist: $nick <br />";
print "Das Passwort ist: $pw <br />";
print "Die Email lautet: $mail <br />";
