import ChallengeAndSolution from "./_components/ChallengeAndSolution";
import DocumentationSection from "./_components/DocumentationSection";
import PayinsSolution from "./_components/PayinsSolution";
import PayinsHeroSection from "./_components/PayinsHeroSection";

export default function Payins() {
    return (
        <main>
            <PayinsHeroSection />
            <PayinsSolution />
            <ChallengeAndSolution />
            <DocumentationSection />
        </main>
    )
}