var example = ['Manager', 'Consultant', 'Entrepreneur'];

        textSequence(0);
        function textSequence(i) {

            if (example.length > i) {
                setTimeout(function() {
                    document.getElementById("jobTitle").innerHTML = example[i];
                    textSequence(++i);
                }, 1100); // 1 second (in milliseconds)

            } else if (example.length == i) { // Loop
                textSequence(0);
            }

        }