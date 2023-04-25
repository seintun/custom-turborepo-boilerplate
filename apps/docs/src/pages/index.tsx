import Head from 'next/head';
import { Button } from 'ui';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Docs - Turborepo Example</title>
            </Head>

            <main>
                <h1>
                    Docs
                    <span>Turborepo Example SDSADad</span>
                </h1>
                <div>
                    <Button />
                </div>
            </main>
        </div>
    );
}
